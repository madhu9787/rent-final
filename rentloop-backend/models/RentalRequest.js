const mongoose = require("mongoose");

const RentalRequestSchema = new mongoose.Schema({
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
    renter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected", "picked_up", "returned"],
        default: "pending",
    },
    conditionPhotosStart: { type: [String], default: [] },
    conditionPhotosEnd: { type: [String], default: [] },
    renterNote: { type: String, default: "" },
    ownerNote: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("RentalRequest", RentalRequestSchema);
