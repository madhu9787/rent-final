import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./ItemListing.css";

const ItemListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pricePerHour: "",
    pricePerDay: "",
    category: "",
    location: "",
    images: "", // Storing Base64 string for simplicity
  });
  const [msg, setMsg] = useState("");

  // Get current user from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, images: [reader.result] }); // Store as array of strings
      };
      reader.readAsDataURL(file);
    }
  };

  const suggestPrice = async () => {
    if (!formData.category) {
      alert("Please select a category first.");
      return;
    }
    try {
      const res = await axios.get(`http://localhost:5000/api/items/suggest-price/${formData.category}`);
      setFormData({
        ...formData,
        pricePerDay: res.data.avgDay,
        pricePerHour: res.data.avgHour
      });
      setMsg(`✨ AI Suggestion: ${res.data.message}`);
    } catch (err) {
      console.error("Price suggestion error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    if (!user) {
      setMsg("❌ You must be logged in to list an item.");
      return;
    }

    try {
      const payload = { ...formData, owner: user.id };
      await axios.post("http://localhost:5000/api/items", payload);
      setMsg("✅ Item listed successfully!");
      setFormData({
        name: "",
        description: "",
        pricePerHour: "",
        pricePerDay: "",
        category: "",
        location: "",
        images: "",
      });
    } catch (err) {
      console.error(err);
      setMsg("❌ Failed to list item. Please try again.");
    }
  };

  return (
    <div className="listing-container">
      <Navbar />
      <div className="listing-form-wrapper">
        <h2>List Your Item</h2>
        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group full-width">
            <label>Item Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. GoPro Hero 10"
              required
            />
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the condition, features, etc."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Fashion">Fashion</option>
              <option value="Books">Books</option>
              <option value="Tools">Tools</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="City or Area"
              required
            />
          </div>

          <div className="form-group">
            <label>Price / Hour (₹)</label>
            <input
              type="number"
              name="pricePerHour"
              value={formData.pricePerHour}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Price / Day (₹)</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                name="pricePerDay"
                style={{ flex: 1 }}
                value={formData.pricePerDay}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="ai-suggest-btn"
                onClick={suggestPrice}
                style={{
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  color: "black",
                  border: "none",
                  padding: "0 15px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "0.8rem",
                  cursor: "pointer"
                }}
              >
                AI Suggest
              </button>
            </div>
          </div>

          <div className="form-group full-width">
            <label>Upload Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
          </div>

          <div className="form-group full-width">
            <button type="submit" className="submit-btn">Publish Listing</button>
          </div>
        </form>
        {msg && <p className="status-msg">{msg}</p>}
      </div>
    </div>
  );
};

export default ItemListing;
