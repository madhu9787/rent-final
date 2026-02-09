import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch notification count
  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user) {
        console.log("No user logged in, skipping notification fetch");
        return;
      }
      try {
        console.log("Fetching notifications for user:", user.id);
        const res = await axios.get(`http://localhost:5000/api/rental-requests/notifications/${user.id}`);
        console.log("Notification response:", res.data);
        setNotificationCount(res.data.count);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        console.error("Error details:", error.response?.data);
      }
    };

    fetchNotifications();
    // Poll every 30 seconds for new notifications
    const interval = setInterval(fetchNotifications, 30000);
    return () => clearInterval(interval);
  }, [user]);

  // Fetch modules dynamically from API or use fallback
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get("/api/modules");
        setModules(response.data);
      } catch (error) {
        // Fallback modules
        setModules([
          { id: "user", title: "User Profile", desc: "Manage detailed profile & preferences", icon: "fa-user-circle", path: "/user-profile" },
          { id: "discover", title: "Discover Items", desc: "Find unique items to rent near you", icon: "fa-compass", path: "/discover-items" },
          { id: "mylistings", title: "My Listings", desc: "Manage your items for rent", icon: "fa-warehouse", path: "/my-listings" },
          { id: "favorites", title: "My Favorites", desc: "Items you've saved for later", icon: "fa-heart", path: "/favorites" },
          { id: "requests", title: "Rental Requests", desc: "Manage incoming & outgoing rentals", icon: "fa-exchange-alt", path: "/rental-requests", hasNotification: true },
          { id: "listing", title: "Item Listing", desc: "Catalog your rental inventory", icon: "fa-cubes", path: "/item-listing" },
          { id: "search", title: "Search & Filter", desc: "Advanced item discovery", icon: "fa-search", path: "/search-filter" },
          { id: "calendar", title: "Availability", desc: "Real-time calendar tracking", icon: "fa-calendar-alt", path: "/calendar-availability" },
          { id: "support", title: "AI Support", desc: "24/7 Intelligent Assistance", icon: "fa-robot", path: "/chatbot" },
        ]);
      }
    };

    fetchModules();
  }, []);

  return (
    <div className="home-container">
      {/* PROFESSIONAL NAVBAR */}
      <Navbar notificationCount={notificationCount} />

      {/* HERO SECTION */}
      <header className="hero-section">
        <h1 className="hero-title">Experience the Future of <span className="highlight">Renting</span></h1>
        <p className="hero-subtitle">Your all-in-one platform for seamless neighborhood sharing. Smart, Secure, Simple.</p>
      </header>

      {/* DASHBOARD GRID */}
      <main className="dashboard-grid">

        {modules.map((mod) => (
          <div
            key={mod.id}
            className="module-card glass-card"
            onClick={() => navigate(mod.path)}
          >
            <div className="card-icon-wrapper">
              <i className={`fas ${mod.icon}`}></i>
              {/* Notification Badge */}
              {mod.hasNotification && notificationCount > 0 && (
                <div className="notification-badge">
                  {notificationCount}
                </div>
              )}
            </div>
            <div className="card-content">
              <h3 className="card-title">{mod.title}</h3>
              <p className="card-desc">{mod.desc}</p>
            </div>
            <div className="card-footer">
              <span className="explore-text">Explore <i className="fas fa-arrow-right"></i></span>
            </div>
          </div>
        ))}
      </main>

    </div>
  );
};

export default Home;
