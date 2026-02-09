const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    pricePerDay: { type: Number, required: true },
    category: { type: String, required: true },
    images: { type: [String], default: [] }, // Array of image URLs/Base64
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    location: { type: String, required: true }, // Google Map Link or Address
    availability: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Item", ItemSchema);
