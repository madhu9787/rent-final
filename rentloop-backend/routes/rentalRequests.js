const router = require("express").Router();
const RentalRequest = require("../models/RentalRequest");

// CREATE RENTAL REQUEST
router.post("/", async (req, res) => {
    const newRequest = new RentalRequest(req.body);
    try {
        const savedRequest = await newRequest.save();
        res.status(200).json(savedRequest);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET REQUESTS FOR OWNER
router.get("/owner/:userId", async (req, res) => {
    try {
        const requests = await RentalRequest.find({ owner: req.params.userId })
            .populate("item")
            .populate("renter", "name fullName email phone");
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET REQUESTS FOR RENTER
router.get("/renter/:userId", async (req, res) => {
    try {
        const requests = await RentalRequest.find({ renter: req.params.userId })
            .populate("item")
            .populate("owner", "name fullName email phone");
        res.status(200).json(requests);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE REQUEST STATUS
router.put("/:id", async (req, res) => {
    try {
        const updateData = {};
        if (req.body.status) updateData.status = req.body.status;
        if (req.body.conditionPhotosStart) updateData.conditionPhotosStart = req.body.conditionPhotosStart;
        if (req.body.conditionPhotosEnd) updateData.conditionPhotosEnd = req.body.conditionPhotosEnd;
        if (req.body.renterNote) updateData.renterNote = req.body.renterNote;
        if (req.body.ownerNote) updateData.ownerNote = req.body.ownerNote;

        const updatedRequest = await RentalRequest.findByIdAndUpdate(
            req.params.id,
            { $set: updateData },
            { new: true }
        );
        res.status(200).json(updatedRequest);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET BOOKED DATES FOR AN ITEM
router.get("/item/:itemId/booked", async (req, res) => {
    try {
        const requests = await RentalRequest.find({
            item: req.params.itemId,
            status: "accepted"
        }).select("startDate endDate");

        const booked = requests.map(r => ({
            start: r.startDate,
            end: r.endDate
        }));
        res.status(200).json(booked);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET NOTIFICATION COUNT (Pending requests for owner)
router.get("/notifications/:userId", async (req, res) => {
    try {
        const pendingCount = await RentalRequest.countDocuments({
            owner: req.params.userId,
            status: "pending"
        });
        res.status(200).json({ count: pendingCount });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
