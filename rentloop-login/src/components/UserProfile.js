import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const localUser = JSON.parse(localStorage.getItem("user"));
  const userId = localUser?.id;

  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aadharNumber: "",
    password: ""
  });
  const [msg, setMsg] = useState("");

  // 1. Fetch User Data
  useEffect(() => {
    if (!userId) {
      alert("Please login first.");
      navigate("/");
      return;
    }

    const fetchData = async () => {
      try {
        // Use full URL because proxy might not be set
        const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
        const data = res.data;
        setFormData({
          fullName: data.fullName || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          aadharNumber: data.aadharNumber || "",
          password: ""
        });
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setMsg("Failed to load profile.");
        setLoading(false);
      }
    };
    fetchData();
  }, [userId, navigate]);

  // 2. Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Update User Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    const payload = { ...formData };
    if (!payload.password) delete payload.password;

    try {
      // Use full URL
      await axios.put(`http://localhost:5000/api/users/${userId}`, payload);
      setMsg("✅ Profile Saved Successfully!");
    } catch (err) {
      console.error("Update error:", err);
      // Capture detailed error from backend
      const errorMsg = err.response?.data?.message || err.message || "Failed to save profile.";
      setMsg(`❌ ${errorMsg}`);
    }
  };

  if (loading) return <div className="user-profile-container">Loading...</div>;

  return (
    <div className="user-profile-container">
      <div className="profile-card glass-panel">
        <h2 className="title">My Profile</h2>
        <p className="subtitle">Manage authentication and contact details.</p>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="form-group">
              <label>Aadhaar Number</label>
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="12-digit number"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your permanent address"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label>New Password (Optional)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave blank to keep current password"
            />
          </div>

          <button type="submit" className="save-btn">Save Changes</button>

          {msg && <div className="status-message">{msg}</div>}
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
