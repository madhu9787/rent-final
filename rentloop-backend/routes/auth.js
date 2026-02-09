const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * =========================
 * REGISTER
 * =========================
 * body: {
 *   name,
 *   password,
 *   role (optional: renter | owner)
 * }
 */
router.post("/register", async (req, res) => {
    try {
        // check if user already exists
        const existingUser = await User.findOne({ name: req.body.name });
        if (existingUser) {
            return res.status(400).json({ message: "Name already exists!" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // create new user
        const newUser = new User({
            name: req.body.name,
            password: hashedPassword,
            role: req.body.role || "renter", // default renter
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: savedUser._id,
                name: savedUser.name,
                role: savedUser.role,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * =========================
 * LOGIN
 * =========================
 * body: {
 *   name,
 *   password
 * }
 */
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name });
        if (!user) {
            return res.status(400).json({ message: "Wrong credentials!" });
        }

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword) {
            return res.status(400).json({ message: "Wrong credentials!" });
        }

        // create token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
