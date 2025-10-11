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
import axios from "axios";
import "./PaymentPage.css";
import dummyQR from "../assets/dummyQR.png"; // QR image inside 'assets' folder

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePaymentConfirmation = async () => {
    setLoading(true);
    setMessage("");

    try {
      // Simulate sending payment verification to backend
      const response = await axios.post("/api/verify-payment", { amount: 500, upiId: "demo@upi" });

      if (response.data.success) {
        setMessage("✅ Payment Confirmed! Thank you for your transaction.");
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
    <div className="payment-container">
      <h2>🔒 Secure Payment</h2>
      <p>Scan the QR code below to proceed with your payment</p>

      <div className="qr-section">
        <img src={dummyQR} alt="Dummy QR Code" className="qr-image" />
        <p className="scan-text">Scan using any UPI app like GPay, PhonePe, Paytm</p>
      </div>

      <div className="payment-info">
        <p><strong>Amount:</strong> ₹500 (Sample)</p>
        <p><strong>UPI ID:</strong> demo@upi</p>
      </div>

      <button 
        className="confirm-btn" 
        onClick={handlePaymentConfirmation} 
        disabled={loading}
      >
        {loading ? "Verifying..." : "✅ I have paid"}
      </button>

      {message && <p className="payment-message">{message}</p>}
    </div>
  );
};

export default PaymentPage;
