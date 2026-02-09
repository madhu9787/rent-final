const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
    {
        rentalRequest: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RentalRequest",
            required: false, // Optional for now as we simulate
        },
        payer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        payee: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
        amount: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "completed", "failed"],
            default: "pending",
        },
        transactionId: {
            type: String,
            required: true,
            unique: true,
        },
        upiId: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
