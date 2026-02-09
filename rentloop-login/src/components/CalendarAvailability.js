import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import "./CalendarAvailability.css";
import Navbar from "./Navbar";

const CalendarAvailability = () => {
  const [userItems, setUserItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [availability, setAvailability] = useState({
    blockedDates: [],
    bookedDates: [],
    pendingDates: []
  });
  const [stats, setStats] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [blockReason, setBlockReason] = useState("");
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id || null;

  // Fetch user's items and availability data
  useEffect(() => {
    if (userId) {
      fetchUserData();
    } else {
      setLoading(false);
      setError("Please log in to view availability");
    }
  }, [userId]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch user's items
      const itemsRes = await axios.get(`http://localhost:5000/api/items/user/${userId}`);
      setUserItems(itemsRes.data);

      // Fetch stats
      const statsRes = await axios.get(`http://localhost:5000/api/availability/stats/${userId}`);
      setStats(statsRes.data);

      // Fetch upcoming bookings (Include accepted/picked_up)
      const bookingsRes = await axios.get(`http://localhost:5000/api/rental-requests/owner/${userId}`);
      const upcoming = bookingsRes.data.filter(
        req => ["accepted", "approved", "picked_up"].includes(req.status) && new Date(req.startDate) >= new Date()
      );
      setUpcomingBookings(upcoming);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load availability data. Please try again.");
      setLoading(false);
    }
  };

  // Fetch availability for selected item
  const fetchItemAvailability = async (itemId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/availability/item/${itemId}`);
      setAvailability(res.data);
    } catch (error) {
      console.error("Error fetching availability:", error);
      setAvailability({
        blockedDates: [],
        bookedDates: [],
        pendingDates: []
      });
    }
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    fetchItemAvailability(item._id);
  };

  // Helper to format date as YYYY-MM-DD local time
  const formatLocalDate = (date) => {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  // Check if a date is blocked, booked, or pending
  const getTileClassName = ({ date, view }) => {
    if (view !== "month") return null;

    const dateStr = formatLocalDate(date);

    // Check if date is blocked
    const isBlocked = availability.blockedDates.some(block => {
      const start = formatLocalDate(block.startDate);
      const end = formatLocalDate(block.endDate);
      return dateStr >= start && dateStr <= end;
    });

    if (isBlocked) return "blocked-date";

    // Check if date is booked
    const isBooked = availability.bookedDates.some(booking => {
      const start = formatLocalDate(booking.startDate);
      const end = formatLocalDate(booking.endDate);
      return dateStr >= start && dateStr <= end;
    });

    if (isBooked) return "booked-date";

    // Check if date is pending
    const isPending = availability.pendingDates.some(pending => {
      const start = formatLocalDate(pending.startDate);
      const end = formatLocalDate(pending.endDate);
      return dateStr >= start && dateStr <= end;
    });

    if (isPending) return "pending-date";

    return "available-date";
  };

  // Get tile content (tooltip info)
  const getTileContent = ({ date, view }) => {
    if (view !== "month") return null;

    const dateStr = formatLocalDate(date);

    // Find booking info
    const booking = availability.bookedDates.find(b => {
      const start = formatLocalDate(b.startDate);
      const end = formatLocalDate(b.endDate);
      return dateStr >= start && dateStr <= end;
    });

    if (booking) {
      return <div className="tile-tooltip">Booked by {booking.renterName}</div>;
    }

    return null;
  };

  // Handle date click for blocking
  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (!dateRange.start) {
      setDateRange({ start: date, end: null });
    } else if (!dateRange.end) {
      setDateRange({ ...dateRange, end: date });
      setShowBlockModal(true);
    }
  };

  // Block dates
  const handleBlockDates = async () => {
    if (!selectedItem || !dateRange.start || !dateRange.end) {
      alert("Please select both start and end dates");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/availability/block", {
        itemId: selectedItem._id,
        ownerId: userId,
        startDate: dateRange.start,
        endDate: dateRange.end,
        reason: blockReason || "Owner blocked"
      });

      alert("Dates blocked successfully!");
      fetchItemAvailability(selectedItem._id);
      fetchUserData(); // Refresh stats
      setShowBlockModal(false);
      setDateRange({ start: null, end: null });
      setBlockReason("");
    } catch (error) {
      console.error("Error blocking dates:", error);
      alert("Failed to block dates. Please try again.");
    }
  };

  // Unblock dates
  const handleUnblockDate = async (blockId) => {
    if (!selectedItem) return;

    if (!window.confirm("Are you sure you want to unblock these dates?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/availability/unblock/${selectedItem._id}/${blockId}`);
      alert("Dates unblocked successfully!");
      fetchItemAvailability(selectedItem._id);
      fetchUserData(); // Refresh stats
    } catch (error) {
      console.error("Error unblocking dates:", error);
      alert("Failed to unblock dates. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="calendar-container">
        <Navbar />
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading your availability dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="calendar-container">
        <Navbar />
        <div className="error-message">
          <i className="fas fa-exclamation-circle"></i>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <Navbar />

      <div className="availability-header">
        <h1>📅 Availability Dashboard</h1>
        <p>Manage your items' availability and bookings</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-info">
            <h3>{stats.totalItems || 0}</h3>
            <p>Total Items</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <h3>{stats.totalBookings || 0}</h3>
            <p>Total Bookings</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-info">
            <h3>{stats.upcomingBookings || 0}</h3>
            <p>Upcoming Bookings</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🚫</div>
          <div className="stat-info">
            <h3>{stats.totalBlockedDays || 0}</h3>
            <p>Blocked Days</p>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="items-section">
        <h2>🏠 Your Listed Items</h2>
        {userItems.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-box-open"></i>
            <p>No items listed yet</p>
            <button onClick={() => window.location.href = '/item-listing'}>Add Your First Item</button>
          </div>
        ) : (
          <div className="items-grid">
            {userItems.map((item) => (
              <div
                key={item._id}
                className={`item-card ${selectedItem?._id === item._id ? "selected" : ""}`}
                onClick={() => handleItemSelect(item)}
              >
                <img
                  src={item.images?.[0] || item.image || "https://via.placeholder.com/150"}
                  alt={item.name}
                  onError={(e) => e.target.src = "https://via.placeholder.com/150"}
                />
                <h3>{item.name}</h3>
                <p className="item-category">{item.category}</p>
                <p className="item-price">₹{item.pricePerDay}/day</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Calendar Section */}
      {selectedItem && (
        <div className="calendar-section">
          <h2>📆 Calendar for {selectedItem.name}</h2>

          {/* Legend */}
          <div className="calendar-legend">
            <div className="legend-item">
              <span className="legend-color available"></span>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <span className="legend-color booked"></span>
              <span>Booked</span>
            </div>
            <div className="legend-item">
              <span className="legend-color pending"></span>
              <span>Pending</span>
            </div>
            <div className="legend-item">
              <span className="legend-color blocked"></span>
              <span>Blocked</span>
            </div>
          </div>

          <div className="calendar-wrapper">
            <Calendar
              onChange={handleDateClick}
              value={selectedDate}
              tileClassName={getTileClassName}
              tileContent={getTileContent}
              className="custom-calendar"
              minDate={new Date()}
              locale="en-US"
              formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
              formatMonthYear={(locale, date) =>
                date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
              }
              nextLabel="›"
              prevLabel="‹"
              next2Label="»"
              prev2Label="«"
            />
          </div>

          <div className="calendar-actions">
            <button className="btn-primary" onClick={() => setShowBlockModal(true)}>
              🚫 Block Dates
            </button>
            <p className="hint">Click start date, then end date to select range</p>
          </div>

          {/* Blocked Dates List */}
          {availability.blockedDates.length > 0 && (
            <div className="blocked-dates-list">
              <h3>🚫 Blocked Dates</h3>
              {availability.blockedDates.map((block, idx) => (
                <div key={block._id || idx} className="blocked-item">
                  <div>
                    <strong>
                      {new Date(block.startDate).toLocaleDateString()} - {new Date(block.endDate).toLocaleDateString()}
                    </strong>
                    <p>{block.reason}</p>
                  </div>
                  <button
                    className="btn-unblock"
                    onClick={() => handleUnblockDate(block._id)}
                  >
                    Unblock
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Upcoming Bookings */}
      {upcomingBookings.length > 0 && (
        <div className="bookings-section">
          <h2>📋 Upcoming Bookings</h2>
          <div className="bookings-grid">
            {upcomingBookings.map((booking) => (
              <div key={booking._id} className="booking-card">
                <h3>{booking.item?.name || "Item"}</h3>
                <p><strong>Renter:</strong> {booking.renter?.name || booking.renter?.fullName || "Unknown"}</p>
                <p><strong>Dates:</strong> {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</p>
                <p><strong>Status:</strong> <span className="status-approved">{booking.status}</span></p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Block Modal */}
      {showBlockModal && (
        <div className="modal-overlay" onClick={() => setShowBlockModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Block Dates</h3>
            {dateRange.start && dateRange.end ? (
              <p>
                <strong>From:</strong> {dateRange.start.toLocaleDateString()}<br />
                <strong>To:</strong> {dateRange.end.toLocaleDateString()}
              </p>
            ) : (
              <p className="hint">Please select start and end dates on the calendar</p>
            )}
            <label>Reason (optional):</label>
            <input
              type="text"
              value={blockReason}
              onChange={(e) => setBlockReason(e.target.value)}
              placeholder="e.g., Maintenance, Personal use"
            />
            <div className="modal-actions">
              <button
                className="btn-primary"
                onClick={handleBlockDates}
                disabled={!dateRange.start || !dateRange.end}
              >
                Block Dates
              </button>
              <button className="btn-secondary" onClick={() => {
                setShowBlockModal(false);
                setDateRange({ start: null, end: null });
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarAvailability;