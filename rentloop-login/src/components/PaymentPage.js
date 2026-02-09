// import React from "react";
// import "./PaymentPage.css";
// import dummyQR from "../assets/dummyQR.png"; // Make sure you place your QR image inside 'assets' folder

// const PaymentPage = () => {
//   return (
//     <div className="payment-container">
//       <h2>🔒 Secure Payment</h2>
//       <p>Scan the QR code below to proceed with your payment</p>

//       <div className="qr-section">
//         <img src={dummyQR} alt="Dummy QR Code" className="qr-image" />
//         <p className="scan-text">Scan using any UPI app like GPay, PhonePe, Paytm</p>
//       </div>

//       <div className="payment-info">
//         <p><strong>Amount:</strong> ₹500 (Sample)</p>
//         <p><strong>UPI ID:</strong> demo@upi</p>
//       </div>

//       <button className="confirm-btn" onClick={() => alert("Payment Confirmed!")}>
//         ✅ I have paid
//       </button>
//     </div>
//   );
// };

// export default PaymentPage;




import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./PaymentPage.css";
import dummyQR from "../assets/dummyQR.png";
import Navbar from "./Navbar";

const PaymentPage = ({ amount: propAmount, upiId: propUpiId, rentalRequestId: propReqId, payeeId: propPayeeId }) => {
  const location = useLocation();
  const { amount: stateAmount, upiId: stateUpiId, rentalRequestId: stateReqId, payeeId: statePayeeId } = location.state || {};

  const amount = stateAmount || propAmount || 500;
  const upiId = stateUpiId || propUpiId || "rentloop@okaxis";
  const rentalRequestId = stateReqId || propReqId;
  const payeeId = statePayeeId || propPayeeId;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handlePaymentConfirmation = async () => {
    if (!user) {
      alert("Please log in to make a payment.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Simulate sending payment verification to backend
      const response = await axios.post("http://localhost:5000/api/payments/verify", {
        payerId: user.id,
        amount: amount || 500,
        upiId: upiId || "demo@upi",
        rentalRequestId: rentalRequestId,
        payeeId: payeeId
      });

      if (response.data.success) {
        setSuccess(true);
        setMessage(`✅ Payment Confirmed! Transaction ID: ${response.data.payment.transactionId}`);
      } else {
        setMessage("❌ Payment verification failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="payment-page-wrapper">
      <Navbar />
      <div className="payment-container glass-card">
        <h2>🔒 LoopPay Secure Gateway</h2>
        <p className="payment-subtitle">Complete your rental verification via Scan & Pay</p>

        <div className="qr-section">
          <div className="qr-frame">
            <img src={dummyQR} alt="Dummy QR Code" className="qr-image" />
          </div>
          <p className="scan-text">Scan using Google Pay, PhonePe, or Paytm</p>
        </div>

        <div className="payment-details">
          <div className="detail-row">
            <span>Amount Payable:</span>
            <strong>₹{amount || 500}</strong>
          </div>
          <div className="detail-row">
            <span>UPI ID:</span>
            <strong>{upiId || "rentloop@okaxis"}</strong>
          </div>
        </div>

        {!success ? (
          <button
            className="confirm-btn pulse-btn"
            onClick={handlePaymentConfirmation}
            disabled={loading}
          >
            {loading ? <span className="loader"></span> : "✅ I Have Paid"}
          </button>
        ) : (
          <div className="payment-success-badge">
            <i className="fas fa-check-circle"></i> Transaction Successful
          </div>
        )}

        {message && <div className={`payment-message ${success ? 'success' : 'error'}`}>{message}</div>}

        <div className="payment-footer">
          <p><i className="fas fa-shield-alt"></i> SSL Encrypted & Secure</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
