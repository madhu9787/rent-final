import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./RentalRequests.css";

const RentalRequests = () => {
    const navigate = useNavigate();
    const [incoming, setIncoming] = useState([]);
    const [outgoing, setOutgoing] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchAllRequests = async () => {
            if (!user) return;
            try {
                const [incRes, outRes] = await Promise.all([
                    axios.get(`http://localhost:5000/api/rental-requests/owner/${user.id}`),
                    axios.get(`http://localhost:5000/api/rental-requests/renter/${user.id}`)
                ]);
                setIncoming(incRes.data);
                setOutgoing(outRes.data);
            } catch (err) {
                console.error("Error fetching requests:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAllRequests();
    }, [user?.id]);

    const handleStatusUpdate = async (requestId, status, additionalData = {}) => {
        try {
            await axios.put(`http://localhost:5000/api/rental-requests/${requestId}`, { status, ...additionalData });
            setIncoming(incoming.map(req => req._id === requestId ? { ...req, status, ...additionalData } : req));
            setOutgoing(outgoing.map(req => req._id === requestId ? { ...req, status, ...additionalData } : req));
        } catch (err) {
            console.error("Error updating status:", err);
        }
    };

    const handlePhotoUpload = (e, callback) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => callback(reader.result);
            reader.readAsDataURL(file);
        }
    };

    if (!user) return <div className="requests-container"><Navbar /><h2>Please Log in</h2></div>;

    const renderRequestCard = (req, type) => (
        <div key={req._id} className="request-card" style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", marginBottom: "15px" }}>
                <div className="request-info">
                    {req.item && req.item.images && req.item.images.length > 0 ? (
                        <img src={req.item.images[0]} alt={req.item.name} className="req-item-img" />
                    ) : (
                        <div className="req-item-img no-img-placeholder" style={{ fontSize: "1.5rem" }}><i className="fas fa-box"></i></div>
                    )}
                    <div>
                        <h3>{req.item?.name || "Deleted Item"}</h3>
                        <p>{type === "inc" ? "Renter: " : "Owner: "} <strong>{type === "inc" ? req.renter?.name : req.owner?.name}</strong></p>
                        <p>Dates: {new Date(req.startDate).toLocaleDateString()} - {new Date(req.endDate).toLocaleDateString()}</p>
                        <p>Total: ₹{req.totalPrice}</p>
                    </div>
                </div>
                <div className="request-status">
                    <span className={`status-badge ${req.status}`}>{req.status.replace("_", " ")}</span>
                    {type === "inc" && req.status === "pending" && (
                        <div className="status-actions">
                            <button className="accept-btn" onClick={() => handleStatusUpdate(req._id, "accepted")}>Accept</button>
                            <button className="reject-btn" onClick={() => handleStatusUpdate(req._id, "rejected")}>Reject</button>
                        </div>
                    )}
                    {type === "out" && req.status === "accepted" && (
                        <button
                            className="pay-btn"
                            style={{ marginTop: "10px", background: "linear-gradient(135deg, #00d2ff, #3a7bd5)", color: "white", border: "none", padding: "8px 15px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold" }}
                            onClick={() => navigate("/payment", { state: { amount: req.totalPrice, rentalRequestId: req._id, payeeId: req.owner._id } })}
                        >
                            <i className="fas fa-credit-card"></i> Pay Now
                        </button>
                    )}
                    {type === "out" && req.status === "returned" && (
                        <p style={{ fontSize: "0.8rem", color: "#ffd700", marginTop: "10px" }}>
                            <i className="fas fa-check-circle"></i> Item Returned Successfully
                        </p>
                    )}
                </div>
            </div>

            {/* CONDITION LEDGER SECTION */}
            <div className="condition-ledger" style={{ width: "100%", background: "rgba(255,255,255,0.03)", padding: "15px", borderRadius: "10px", marginTop: "10px" }}>
                <h4 style={{ color: "#ffd700", fontSize: "0.9rem", marginBottom: "10px" }}><i className="fas fa-camera"></i> Condition Ledger</h4>

                {req.status === "accepted" && type === "out" && (
                    <div className="ledger-action">
                        <p style={{ fontSize: "0.8rem", marginBottom: "10px" }}>Upload "Start of Rental" photos to confirm pickup.</p>
                        <input type="file" onChange={(e) => handlePhotoUpload(e, (base64) => handleStatusUpdate(req._id, "picked_up", { conditionPhotosStart: [base64] }))} />
                    </div>
                )}

                {req.status === "picked_up" && type === "inc" && (
                    <div className="ledger-action">
                        <p style={{ fontSize: "0.8rem", marginBottom: "10px" }}>Item is with renter. Upload "End of Rental" photos upon return.</p>
                        <input type="file" onChange={(e) => handlePhotoUpload(e, (base64) => handleStatusUpdate(req._id, "returned", { conditionPhotosEnd: [base64] }))} />
                    </div>
                )}

                {(req.status === "picked_up" || req.status === "returned") && (
                    <div className="ledger-photos" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                        {req.conditionPhotosStart?.length > 0 && (
                            <div className="photo-group">
                                <span style={{ fontSize: "0.7rem", display: "block" }}>Pickup Condition:</span>
                                <img src={req.conditionPhotosStart[0]} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px", border: "1px solid #ffd700" }} alt="pickup" />
                            </div>
                        )}
                        {req.conditionPhotosEnd?.length > 0 && (
                            <div className="photo-group">
                                <span style={{ fontSize: "0.7rem", display: "block" }}>Return Condition:</span>
                                <img src={req.conditionPhotosEnd[0]} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px", border: "1px solid #00ff00" }} alt="return" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="requests-container">
            <Navbar />
            <div className="requests-header">
                <h2>Rental Dashboard</h2>
                <p>Manage your rental lifecycle.</p>
            </div>

            {loading ? (
                <div style={{ textAlign: "center", color: "white" }}>Loading dashboard...</div>
            ) : (
                <div className="requests-sections">
                    <section className="req-section">
                        <h3 className="section-title">Incoming Requests (As Owner)</h3>
                        <div className="requests-list">
                            {incoming.length === 0 ? <p className="empty-msg">No incoming requests.</p> : incoming.map(r => renderRequestCard(r, "inc"))}
                        </div>
                    </section>

                    <section className="req-section" style={{ marginTop: "50px" }}>
                        <h3 className="section-title">My Rental Requests (As Renter)</h3>
                        <div className="requests-list">
                            {outgoing.length === 0 ? <p className="empty-msg">You haven't requested any items.</p> : outgoing.map(r => renderRequestCard(r, "out"))}
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
};

export default RentalRequests;
