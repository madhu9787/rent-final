import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./SearchAndFilter.css";
import "./DiscoverItems.css"; // Reuse card styles

const SearchAndFilter = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    minPrice: "",
    maxPrice: "",
    sort: "newest"
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/items");
        setItems(res.data);
        setFilteredItems(res.data);
      } catch (err) {
        console.error("Error fetching items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    let results = [...items];

    // Search text
    if (filters.search) {
      results = results.filter(item =>
        item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.description.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Category
    if (filters.category !== "All") {
      results = results.filter(item => item.category === filters.category);
    }

    // Price
    if (filters.minPrice) {
      results = results.filter(item => item.pricePerDay >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      results = results.filter(item => item.pricePerDay <= Number(filters.maxPrice));
    }

    // Sort
    if (filters.sort === "price-low") {
      results.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (filters.sort === "price-high") {
      results.sort((a, b) => b.pricePerDay - a.pricePerDay);
    } else {
      // Newest first
      results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    setFilteredItems(results);
  }, [filters, items]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "All",
      minPrice: "",
      maxPrice: "",
      sort: "newest"
    });
  };

  return (
    <div className="search-dashboard-container">
      <Navbar />
      <div className="discover-header">
        <h1 className="discover-title">Smart Search</h1>
        <p>Find exactly what you need with advanced filters.</p>
      </div>

      <div className="search-controls">
        <div className="control-group">
          <label>Keywords</label>
          <input
            type="text"
            name="search"
            placeholder="Search items..."
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>

        <div className="control-group">
          <label>Category</label>
          <select name="category" value={filters.category} onChange={handleFilterChange}>
            {["All", "Electronics", "Furniture", "Fashion", "Books", "Tools", "Vehicles"].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="control-group">
          <label>Price Range (₹)</label>
          <div className="price-inputs">
            <input type="number" name="minPrice" placeholder="Min" value={filters.minPrice} onChange={handleFilterChange} />
            <span>-</span>
            <input type="number" name="maxPrice" placeholder="Max" value={filters.maxPrice} onChange={handleFilterChange} />
          </div>
        </div>

        <div className="control-group">
          <label>Sort By</label>
          <select name="sort" value={filters.sort} onChange={handleFilterChange}>
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <button className="clear-btn" onClick={clearFilters}>Clear All</button>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", color: "white" }}>Analyzing data...</div>
      ) : (
        <div className="search-results-grid">
          {filteredItems.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", opacity: 0.7 }}>
              No items match your criteria. Try adjusting filters.
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item._id} className="discover-card">
                <div className="card-img-wrapper">
                  {item.images && item.images.length > 0 ? (
                    <img src={item.images[0]} alt={item.name} className="card-img" />
                  ) : (
                    <div className="no-img-placeholder"><i className="fas fa-box"></i></div>
                  )}
                </div>
                <div className="card-body">
                  <span className="item-category">{item.category}</span>
                  <h3 className="item-title">{item.name}</h3>
                  <div className="item-price">₹{item.pricePerDay} / day</div>
                </div>
                <div className="card-actions" style={{ padding: "0 20px 20px" }}>
                  <button className="action-btn rent-btn" style={{ flex: 1 }} onClick={() => window.location.href = "/discover-items"}>
                    View in Discover
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

export default SearchAndFilter;
