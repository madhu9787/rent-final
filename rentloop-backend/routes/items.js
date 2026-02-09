const router = require("express").Router();
const Item = require("../models/Item");

// CREATE ITEM (Owner only)
router.post("/", async (req, res) => {
    const newItem = new Item(req.body);
    try {
        const savedItem = await newItem.save();
        res.status(200).json(savedItem);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL ITEMS (with optional category/search filter)
router.get("/", async (req, res) => {
    const qCategory = req.query.category;
    const qSearch = req.query.search;

    try {
        let items;
        if (qCategory) {
            items = await Item.find({ category: qCategory });
        } else if (qSearch) {
            items = await Item.find({
                $or: [
                    { name: { $regex: qSearch, $options: "i" } },
                    { category: { $regex: qSearch, $options: "i" } }
                ]
            });
        } else {
            items = await Item.find();
        }
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET SINGLE ITEM
router.get("/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id).populate("owner", "name email phone");
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ITEMS BY USER (Owner's Listings)
router.get("/user/:userId", async (req, res) => {
    try {
        const items = await Item.find({ owner: req.params.userId });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json(err);
    }
});

// SUGGEST PRICE (AI MOCK)
router.get("/suggest-price/:category", async (req, res) => {
    try {
        const items = await Item.find({ category: req.params.category });
        if (items.length === 0) {
            return res.status(200).json({
                avgDay: 200,
                avgHour: 25,
                message: "No data for this category. Suggesting base rates."
            });
        }

        const totalDay = items.reduce((sum, item) => sum + item.pricePerDay, 0);
        const avgDay = Math.round(totalDay / items.length);

        res.status(200).json({
            avgDay,
            avgHour: Math.round(avgDay / 8),
            message: `Based on ${items.length} items in "${req.params.category}"`
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE ITEM
router.put("/:id", async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE ITEM
router.delete("/:id", async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
