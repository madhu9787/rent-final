import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./DiscoverItems.css"; // Reuse card styles

const Favorites = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!user) return;
            try {
                const res = await axios.get(`http://localhost:5000/api/users/${user.id}/favorites`);
                setItems(res.data);
            } catch (err) {
                console.error("Error fetching favorites:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [user?.id]);

    const removeFavorite = async (itemId) => {
        try {
            await axios.put(`http://localhost:5000/api/users/${user.id}/favorite`, { itemId });
            setItems(items.filter(item => item._id !== itemId));
        } catch (err) {
            console.error("Error removing favorite:", err);
        }
    };

    if (!user) {
        return (
            <div className="discover-container">
                <Navbar />
                <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
                    <h2>Please log in to view your favorites.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="discover-container">
            <Navbar />
            <div className="discover-header">
                <h1 className="discover-title">My Favorites</h1>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>Items you've saved for later.</p>
            </div>

            {loading ? (
                <div style={{ textAlign: "center", color: "white" }}>Loading favorites...</div>
            ) : (
                <div className="discover-grid">
                    {items.length === 0 ? (
                        <div style={{ gridColumn: "1/-1", textAlign: "center", opacity: 0.7, color: "white" }}>
                            You haven't favorited any items yet.
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
                                    <div className="item-price">
                                        ₹{item.pricePerDay} / day
                                    </div>
                                </div>

                                <div className="card-actions" style={{ padding: "0 20px 20px" }}>
                                    <button className="action-btn rent-btn" style={{ flex: 1 }}>
                                        Rent Now
                                    </button>
                                    <button className="action-btn fav-btn active" onClick={() => removeFavorite(item._id)}>
                                        <i className="fas fa-heart"></i>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Favorites;
