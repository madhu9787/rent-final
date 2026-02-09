import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        // Add any logout logic here (clearing local storage, etc.)
        navigate("/");
    };

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav className="glass-navbar">
            <Link to="/home" className="logo-brand">
                <i className="fas fa-infinity logo-icon"></i>
                <span>RENTLOOP</span>
            </Link>

            <div className="nav-links">
                <Link to="/home" className={`nav-link ${isActive("/home")}`}>
                    Home
                </Link>
                <Link to="/discover-items" className={`nav-link ${isActive("/discover-items")}`}>
                    Discover
                </Link>
                <Link to="/favorites" className={`nav-link ${isActive("/favorites")}`}>
                    Favorites
                </Link>
                <Link to="/rental-requests" className={`nav-link ${isActive("/rental-requests")}`}>
                    Requests
                </Link>
                <Link to="/payment" className={`nav-link ${isActive("/payment")}`}>
                    Payment
                </Link>
                <Link to="/about-us" className={`nav-link ${isActive("/about-us")}`}>
                    About Us
                </Link>
                <Link to="/contact-us" className={`nav-link ${isActive("/contact-us")}`}>
                    Contact Us
                </Link>
            </div>

            <div className="nav-profile">
                <button className="logout-btn" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
