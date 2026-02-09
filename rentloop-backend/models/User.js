// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true, unique: true }, // unique name for login
//     password: { type: String, required: true },
// });

// module.exports = mongoose.model("User", UserSchema);
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // login username
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["renter", "owner"],
        default: "renter",
    },
    // New Profile Fields
    fullName: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    aadharNumber: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    address: { type: String, default: "" },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    totalRentals: { type: Number, default: 0 },
    trustScore: { type: Number, default: 100 }, // 0-100 scale
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
