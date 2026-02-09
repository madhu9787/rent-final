const router = require("express").Router();
const Availability = require("../models/Availability");
const RentalRequest = require("../models/RentalRequest");
const Item = require("../models/Item");

// GET availability for a specific item (blocked + booked dates)
router.get("/item/:itemId", async (req, res) => {
    try {
        const { itemId } = req.params;

        // Get blocked dates
        const availability = await Availability.findOne({ itemId });
        const blockedDates = availability ? availability.blockedDates : [];

        // Get booked dates (accepted/picked_up rental requests)
        const bookedRentals = await RentalRequest.find({
            item: itemId,
            status: { $in: ["accepted", "approved", "picked_up"] }
        }).select("startDate endDate renterName");

        const bookedDates = bookedRentals.map(rental => ({
            startDate: rental.startDate,
            endDate: rental.endDate,
            renterName: rental.renterName,
            type: "booked"
        }));

        // Get pending dates
        const pendingRentals = await RentalRequest.find({
            item: itemId,
            status: "pending"
        }).select("startDate endDate renterName");

        const pendingDates = pendingRentals.map(rental => ({
            startDate: rental.startDate,
            endDate: rental.endDate,
            renterName: rental.renterName,
            type: "pending"
        }));

        res.status(200).json({
            blockedDates,
            bookedDates,
            pendingDates
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET all availability for user's items
router.get("/user/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        // Get all items owned by user
        const items = await Item.find({ owner: userId });
        const itemIds = items.map(item => item._id);

        // Get availability for all items
        const availabilities = await Availability.find({
            itemId: { $in: itemIds }
        }).populate("itemId", "name image category");

        // Get all booked dates for user's items
        const bookedRentals = await RentalRequest.find({
            item: { $in: itemIds },
            status: { $in: ["accepted", "approved", "picked_up"] }
        }).populate("item", "name image");

        res.status(200).json({
            items,
            availabilities,
            bookedRentals
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// BLOCK dates for an item
router.post("/block", async (req, res) => {
    try {
        const { itemId, ownerId, startDate, endDate, reason } = req.body;

        if (!itemId || !ownerId || !startDate || !endDate) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Check if availability document exists
        let availability = await Availability.findOne({ itemId });

        if (!availability) {
            // Create new availability document
            availability = new Availability({
                itemId,
                ownerId,
                blockedDates: []
            });
        }

        // Add blocked date range
        availability.blockedDates.push({
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            reason: reason || "Owner blocked"
        });

        await availability.save();

        res.status(200).json({
            message: "Dates blocked successfully",
            availability
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UNBLOCK dates
router.delete("/unblock/:itemId/:blockId", async (req, res) => {
    try {
        const { itemId, blockId } = req.params;

        const availability = await Availability.findOne({ itemId });

        if (!availability) {
            return res.status(404).json({ error: "Availability not found" });
        }

        // Remove the blocked date by ID
        availability.blockedDates = availability.blockedDates.filter(
            block => block._id.toString() !== blockId
        );

        await availability.save();

        res.status(200).json({
            message: "Dates unblocked successfully",
            availability
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET booking statistics for user
router.get("/stats/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        // Get all items owned by user
        const items = await Item.find({ owner: userId });
        const itemIds = items.map(item => item._id);

        // Get all bookings
        const totalBookings = await RentalRequest.countDocuments({
            item: { $in: itemIds },
            status: { $in: ["accepted", "approved", "picked_up", "returned"] }
        });

        // Get upcoming bookings
        const upcomingBookings = await RentalRequest.countDocuments({
            item: { $in: itemIds },
            status: { $in: ["accepted", "approved", "picked_up"] },
            startDate: { $gte: new Date() }
        });

        // Get total blocked days
        const availabilities = await Availability.find({
            itemId: { $in: itemIds }
        });

        let totalBlockedDays = 0;
        availabilities.forEach(avail => {
            avail.blockedDates.forEach(block => {
                const days = Math.ceil(
                    (new Date(block.endDate) - new Date(block.startDate)) / (1000 * 60 * 60 * 24)
                );
                totalBlockedDays += days;
            });
        });

        res.status(200).json({
            totalItems: items.length,
            totalBookings,
            upcomingBookings,
            totalBlockedDays
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
