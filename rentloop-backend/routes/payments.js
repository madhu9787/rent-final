const router = require("express").Router();
const Payment = require("../models/Payment");

// VERIFY AND SAVE PAYMENT
router.post("/verify", async (req, res) => {
    try {
        const { payerId, amount, upiId, rentalRequestId } = req.body;

        // Simulate verification delay
        // In a real app, this would involve a payment gateway callback

        const newPayment = new Payment({
            payer: payerId,
            amount,
            upiId,
            rentalRequest: rentalRequestId,
            transactionId: "TXN" + Date.now() + Math.floor(Math.random() * 1000),
            status: "completed"
        });

        const savedPayment = await newPayment.save();
        res.status(200).json({ success: true, payment: savedPayment });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET PAYMENT HISTORY FOR A USER
router.get("/user/:userId", async (req, res) => {
    try {
        const payments = await Payment.find({ payer: req.params.userId })
            .sort({ createdAt: -1 });
        res.status(200).json(payments);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
