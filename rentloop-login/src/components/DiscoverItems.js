import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./DiscoverItems.css";

const DiscoverItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [rentDates, setRentDates] = useState({ start: "", end: "" });
    const [showRentModal, setShowRentModal] = useState(false);
    const [bookedDates, setBookedDates] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchItemsAndFavorites = async () => {
            try {
                const query = searchTerm ? `?search=${searchTerm}` : "";
                const itemsRes = await axios.get(`http://localhost:5000/api/items${query}`);
                setItems(itemsRes.data);

                if (user) {
                    const userRes = await axios.get(`http://localhost:5000/api/users/${user.id}`);
                    setFavorites(userRes.data.favorites || []);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        const delayDebounce = setTimeout(() => {
            fetchItemsAndFavorites();
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, user?.id]);

    const toggleFavorite = async (itemId) => {
        if (!user) {
            alert("Please login to save favorites.");
            return;
        }
        try {
            const res = await axios.put(`http://localhost:5000/api/users/${user.id}/favorite`, { itemId });
            setFavorites(res.data);
        } catch (err) {
            console.error("Error toggling favorite:", err);
        }
    };

    const handleRentClick = async (item) => {
        if (!user) {
            alert("Please login to rent items.");
            return;
        }
        setSelectedItem(item);
        setShowRentModal(true);

        // Fetch booked dates for this item
        try {
            const res = await axios.get(`http://localhost:5000/api/rental-requests/item/${item._id}/booked`);
            setBookedDates(res.data);
        } catch (err) {
            console.error("Error fetching booked dates:", err);
        }
    };

    const submitRentalRequest = async () => {
        if (!rentDates.start || !rentDates.end) {
            alert("Please select start and end dates.");
            return;
        }

        const start = new Date(rentDates.start);
        const end = new Date(rentDates.end);
        const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        if (nights <= 0) {
            alert("End date must be after start date.");
            return;
        }

        try {
            const ownerId = selectedItem.owner?._id || selectedItem.owner;
            if (!ownerId) {
                alert("Error: Item owner not found.");
                return;
            }

            const payload = {
                item: selectedItem._id,
                renter: user.id,
                owner: ownerId,
                startDate: rentDates.start,
                endDate: rentDates.end,
                totalPrice: nights * (selectedItem.pricePerDay || 0)
            };

            await axios.post("http://localhost:5000/api/rental-requests", payload);
            alert("Rental request sent successfully! The owner will be notified.");
            setShowRentModal(false);
            setRentDates({ start: "", end: "" });
        } catch (err) {
            console.error("Error sending request:", err);
            alert("Failed to send request. Try again.");
        }
    };

    return (
        <div className="discover-container">
            <Navbar />

            <div className="discover-header">
                <h1 className="discover-title">Discover Unique Finds</h1>
                <div className="search-bar-wrapper" style={{ maxWidth: "500px", margin: "20px auto" }}>
                    <input
                        type="text"
                        placeholder="Search for items, categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: "100%",
                            padding: "15px 20px",
                            borderRadius: "30px",
                            border: "none",
                            background: "rgba(255,255,255,0.1)",
                            color: "white",
                            backdropFilter: "blur(5px)"
                        }}
                    />
                </div>

                <div className="category-filters" style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
                    {["All", "Electronics", "Furniture", "Fashion", "Books", "Tools", "Vehicles"].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSearchTerm(cat === "All" ? "" : cat)}
                            style={{
                                padding: "8px 20px",
                                borderRadius: "20px",
                                border: "1px solid rgba(255,215,0,0.3)",
                                background: searchTerm === cat || (cat === "All" && searchTerm === "") ? "#ffd700" : "transparent",
                                color: searchTerm === cat || (cat === "All" && searchTerm === "") ? "black" : "white",
                                cursor: "pointer",
                                transition: "0.3s"
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div style={{ textAlign: "center", color: "white" }}>Loading treasures...</div>
            ) : (
                <div className="discover-grid">
                    {items.length === 0 ? (
                        <div style={{ gridColumn: "1/-1", textAlign: "center", opacity: 0.7 }}>
                            No items found. Be the first to list something!
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={item._id} className="discover-card">
                                <div className="card-img-wrapper">
                                    {item.images && item.images.length > 0 ? (
                                        <img src={item.images[0]} alt={item.name} className="card-img" />
                                    ) : (
                                        <div className="no-img-placeholder">
                                            <i className="fas fa-box-open"></i>
                                        </div>
                                    )}
                                </div>

                                <div className="card-body">
                                    <span className="item-category">{item.category}</span>
                                    <h3 className="item-title">{item.name}</h3>
                                    <p className="item-desc">
                                        {item.description.length > 80 ? item.description.substring(0, 80) + "..." : item.description}
                                    </p>

                                    <div className="item-meta">
                                        <span><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                                    </div>

                                    <div className="item-price">
                                        ₹{item.pricePerDay} <span style={{ fontSize: "0.8rem", fontWeight: "normal" }}>/ day</span>
                                    </div>
                                </div>

                                <div className="card-actions" style={{ padding: "0 20px 20px" }}>
                                    <button className="action-btn rent-btn" onClick={() => handleRentClick(item)}>
                                        Rent Now
                                    </button>
                                    <button
                                        className={`action-btn fav-btn ${favorites.some(id => id.toString() === item._id.toString()) ? "active" : ""}`}
                                        onClick={() => toggleFavorite(item._id)}
                                    >
                                        <i className={favorites.some(id => id.toString() === item._id.toString()) ? "fas fa-heart" : "far fa-heart"}></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {showRentModal && selectedItem && (
                <div className="rent-modal-overlay">
                    <div className="rent-modal-content">
                        <h3>Rent {selectedItem.name}</h3>
                        <p>Owner: {selectedItem.owner.name || "N/A"}</p>

                        {bookedDates.length > 0 && (
                            <div className="booked-dates-list">
                                <strong>Already Booked:</strong>
                                <ul>
                                    {bookedDates.map((b, i) => (
                                        <li key={i}>{new Date(b.start).toLocaleDateString()} to {new Date(b.end).toLocaleDateString()}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="date-inputs">
                            <label>Start Date</label>
                            <input
                                type="date"
                                value={rentDates.start}
                                onChange={(e) => setRentDates({ ...rentDates, start: e.target.value })}
                            />
                            <label>End Date</label>
                            <input
                                type="date"
                                value={rentDates.end}
                                onChange={(e) => setRentDates({ ...rentDates, end: e.target.value })}
                            />
                        </div>
                        <button className="submit-rent-btn" onClick={submitRentalRequest}>Confirm Request</button>
                        <button className="close-modal-btn" onClick={() => setShowRentModal(false)}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DiscoverItems;
