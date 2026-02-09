const router = require("express").Router();
const Review = require("../models/Review");
const Item = require("../models/Item");

// ADD A REVIEW
router.post("/", async (req, res) => {
    const newReview = new Review(req.body);
    try {
        const savedReview = await newReview.save();

        // Update item's average rating (optional optimization: can also be calculated on the fly)
        // For now, let's just return the saved review
        res.status(200).json(savedReview);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET REVIEWS FOR AN ITEM
router.get("/item/:itemId", async (req, res) => {
    try {
        const reviews = await Review.find({ item: req.params.itemId })
            .populate("renter", "name fullName image")
            .sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET REVIEWS FOR A USER (as owner)
router.get("/user/:userId", async (req, res) => {
    try {
        const reviews = await Review.find({ owner: req.params.userId })
            .populate("item", "name image")
            .populate("renter", "name fullName")
            .sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
