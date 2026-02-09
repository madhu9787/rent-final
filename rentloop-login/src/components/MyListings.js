import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./MyListings.css";

const MyListings = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        pricePerDay: "",
        pricePerHour: ""
    });

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        fetchMyItems();
    }, []);

    const fetchMyItems = async () => {
        if (!user) return;
        try {
            const res = await axios.get(`http://localhost:5000/api/items/user/${user.id}`);
            setItems(res.data);
        } catch (err) {
            console.error("Error fetching items:", err);
        } finally {
            setLoading(false);
        }
    };

    // Handle delete
    const handleDelete = async (itemId) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;

        try {
            await axios.delete(`http://localhost:5000/api/items/${itemId}`);
            alert("Item deleted successfully!");
            fetchMyItems(); // Refresh list
        } catch (err) {
            console.error("Error deleting item:", err);
            alert("Failed to delete item");
        }
    };

    // Handle edit click
    const handleEditClick = (item) => {
        setEditingItem(item);
        setFormData({
            name: item.name,
            description: item.description,
            category: item.category,
            pricePerDay: item.pricePerDay,
            pricePerHour: item.pricePerHour || ""
        });
        setShowEditModal(true);
    };

    // Handle form input change
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle update submit
    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/api/items/${editingItem._id}`, formData);
            alert("Item updated successfully!");
            setShowEditModal(false);
            fetchMyItems(); // Refresh list
        } catch (err) {
            console.error("Error updating item:", err);
            alert("Failed to update item");
        }
    };

    if (!user) {
        return (
            <div className="mylistings-container">
                <Navbar />
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <h2>Please log in to view your listings.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="mylistings-container">
            <Navbar />
            <div className="mylistings-header">
                <h2>My Listings</h2>
                <p>Manage your rented items and track earnings.</p>
            </div>

            {loading ? (
                <p style={{ textAlign: "center" }}>Loading your items...</p>
            ) : (
                <div className="listings-grid">
                    {items.length === 0 ? (
                        <p style={{ opacity: 0.7, fontSize: "1.2rem" }}>No items listed yet. Start earning now!</p>
                    ) : (
                        items.map((item) => (
                            <div key={item._id} className="listing-card">
                                {item.images && item.images.length > 0 ? (
                                    <img src={item.images[0]} alt={item.name} className="listing-image" />
                                ) : (
                                    <div className="no-image">No Image</div>
                                )}
                                <div className="listing-details">
                                    <span className="listing-category">{item.category}</span>
                                    <h3>{item.name}</h3>
                                    <p>{item.description.substring(0, 60)}...</p>
                                    <div className="listing-price">
                                        ₹{item.pricePerDay} / day
                                    </div>
                                    <span className="listing-status status-active">
                                        Active
                                    </span>

                                    {/* Action Buttons */}
                                    <div className="listing-actions">
                                        <button
                                            className="btn-edit"
                                            onClick={() => handleEditClick(item)}
                                        >
                                            ✏️ Edit
                                        </button>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            🗑️ Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Edit Modal */}
            {showEditModal && (
                <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Edit Item</h3>
                        <form onSubmit={handleUpdateSubmit}>
                            <label>Item Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />

                            <label>Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                required
                            />

                            <label>Category</label>
                            <input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                            />

                            <label>Price Per Day (₹)</label>
                            <input
                                type="number"
                                name="pricePerDay"
                                value={formData.pricePerDay}
                                onChange={handleInputChange}
                                required
                            />

                            <label>Price Per Hour (₹) - Optional</label>
                            <input
                                type="number"
                                name="pricePerHour"
                                value={formData.pricePerHour}
                                onChange={handleInputChange}
                            />

                            <div className="modal-actions">
                                <button type="submit" className="btn-save">
                                    💾 Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="btn-cancel"
                                    onClick={() => setShowEditModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyListings;
