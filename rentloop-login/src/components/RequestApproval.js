// src/components/RequestApproval.js
import React, { useState } from "react";
import "./RequestApproval.css";

const RequestApproval = () => {
  const [requests, setRequests] = useState([]);
  const [requestText, setRequestText] = useState("");

  const submitRequest = () => {
    if (requestText.trim() === "") {
      alert("Please write a request!");
      return;
    }

    const newRequest = {
      id: Date.now(),
      text: requestText,
      status: "Pending",
    };
    setRequests([newRequest, ...requests]);
    setRequestText("");
  };

  const approveRequest = (id) => {
    setRequests(
      requests.map((r) =>
        r.id === id ? { ...r, status: "Approved" } : r
      )
    );
  };

  const rejectRequest = (id) => {
    setRequests(
      requests.map((r) =>
        r.id === id ? { ...r, status: "Rejected" } : r
      )
    );
  };

  return (
    <div className="request-container">
      <h2>📨 Request & Approval System</h2>

      <textarea
        placeholder="Enter your request..."
        value={requestText}
        onChange={(e) => setRequestText(e.target.value)}
        className="request-textarea"
      ></textarea>

      <button className="submit-btn" onClick={submitRequest}>
        📝 Submit Request
      </button>

      <div className="requests-list">
        {requests.map((r) => (
          <div key={r.id} className="request-card">
            <div className="request-text">{r.text}</div>
            <div className={`request-status ${r.status.toLowerCase()}`}>
              Status: {r.status}
            </div>
            {r.status === "Pending" && (
              <div className="request-actions">
                <button className="approve-btn" onClick={() => approveRequest(r.id)}>✅ Approve</button>
                <button className="reject-btn" onClick={() => rejectRequest(r.id)}>❌ Reject</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestApproval;



// import React, { useState } from "react";
// import axios from "axios";
// import "./RequestApproval.css";

// const RequestApproval = () => {
//   const [requests, setRequests] = useState([]);
//   const [requestText, setRequestText] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const submitRequest = async () => {
//     if (requestText.trim() === "") {
//       alert("Please write a request!");
//       return;
//     }

//     const newRequest = {
//       text: requestText,
//       status: "Pending",
//       date: new Date().toLocaleDateString(),
//     };

//     setLoading(true);
//     setMessage("");

//     try {
//       // Replace with your backend endpoint
//       const response = await axios.post("/api/requests", newRequest);

//       if (response.data.success) {
//         setRequests([response.data.request, ...requests]);
//         setRequestText("");
//         setMessage("✅ Request submitted successfully!");
//       } else {
//         setMessage("❌ Failed to submit request. Try again.");
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("⚠️ Server error. Please try later.");
//     }

//     setLoading(false);
//   };

//   const updateRequestStatus = async (id, status) => {
//     try {
//       // Replace with your backend endpoint
//       const response = await axios.patch(`/api/requests/${id}`, { status });
//       if (response.data.success) {
//         setRequests(
//           requests.map((r) =>
//             r.id === id ? { ...r, status } : r
//           )
//         );
//       } else {
//         alert("Failed to update status.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Server error. Try again later.");
//     }
//   };

//   return (
//     <div className="request-container">
//       <h2>📨 Request & Approval System</h2>

//       <textarea
//         placeholder="Enter your request..."
//         value={requestText}
//         onChange={(e) => setRequestText(e.target.value)}
//         className="request-textarea"
//       ></textarea>

//       <button className="submit-btn" onClick={submitRequest} disabled={loading}>
//         {loading ? "Submitting..." : "📝 Submit Request"}
//       </button>

//       {message && <p className="request-message">{message}</p>}

//       <div className="requests-list">
//         {requests.map((r) => (
//           <div key={r.id} className="request-card">
//             <div className="request-text">{r.text}</div>
//             <div className={`request-status ${r.status.toLowerCase()}`}>
//               Status: {r.status}
//             </div>
//             {r.status === "Pending" && (
//               <div className="request-actions">
//                 <button
//                   className="approve-btn"
//                   onClick={() => updateRequestStatus(r.id, "Approved")}
//                 >
//                   ✅ Approve
//                 </button>
//                 <button
//                   className="reject-btn"
//                   onClick={() => updateRequestStatus(r.id, "Rejected")}
//                 >
//                   ❌ Reject
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RequestApproval;
