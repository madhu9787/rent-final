const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// GET USER PROFILE
router.get("/:id", async (req, res) => {
    console.log(`[GET] Fetching user: ${req.params.id}`);
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            console.log(`[GET] User not found: ${req.params.id}`);
            return res.status(404).json({ message: "User not found" });
        }

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        console.error(`[GET] Error:`, err);
        res.status(500).json(err);
    }
});

// UPDATE USER PROFILE
router.put("/:id", async (req, res) => {
    console.log(`[PUT] Updating user: ${req.params.id}`);
    console.log(`[PUT] Payload:`, req.body);

    if (req.body.password === "") {
        delete req.body.password;
    }

    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );

        if (!updatedUser) {
            console.log(`[PUT] User not found during update: ${req.params.id}`);
            return res.status(404).json({ message: "User not found" });
        }

        const { password, ...others } = updatedUser._doc;
        res.status(200).json(others);
        console.log(`[PUT] Success:`, others.name);
    } catch (err) {
        console.error(`[PUT] Error:`, err);
        res.status(500).json(err);
    }
});

// TOGGLE FAVORITE
router.put("/:id/favorite", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const itemId = req.body.itemId;

        const isFavorite = user.favorites.some(id => id.toString() === itemId);

        if (isFavorite) {
            // Remove from favorites
            user.favorites = user.favorites.filter(id => id.toString() !== itemId);
        } else {
            // Add to favorites
            user.favorites.push(itemId);
        }

        await user.save();
        res.status(200).json(user.favorites);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET FAVORITES
router.get("/:id/favorites", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate("favorites");
        res.status(200).json(user.favorites);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
