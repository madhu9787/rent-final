
import React, { useState } from "react";
import "./CategoryItems.css";

const allItems = [
  {
    name: "Wooden King Size Bed",
    type: "Bed",
    image: "https://m.media-amazon.com/images/I/71oL1uHqqrL._SX679_.jpg",
    description: "Elegant wooden king size bed with storage",
    priceHour: 120,
    priceDay: 500,
  },
  {
    name: "3-Seater Fabric Sofa",
    type: "Sofa",
    image: "https://m.media-amazon.com/images/I/81xA+ZqM02L._SX679_.jpg",
    description: "Comfortable 3-seater fabric sofa",
    priceHour: 100,
    priceDay: 400,
  },
  {
    name: "Study Table with Drawers",
    type: "Table",
    image: "https://m.media-amazon.com/images/I/61E8IHD2XgL._SX679_.jpg",
    description: "Multipurpose wooden study desk",
    priceHour: 60,
    priceDay: 250,
  },
  {
    name: "Office Chair Ergonomic",
    type: "Chair",
    image: "https://m.media-amazon.com/images/I/71mFlKJZuKL._SX679_.jpg",
    description: "Revolving cushioned chair with wheels",
    priceHour: 50,
    priceDay: 220,
  },
  {
    name: "Dining Table Set (4 Chairs)",
    type: "Dining",
    image: "https://m.media-amazon.com/images/I/61K2CP3jWeL._SX679_.jpg",
    description: "Compact dining table for small families",
    priceHour: 110,
    priceDay: 450,
  },
  {
    name: "Bookshelf with 5 Shelves",
    type: "Storage",
    image: "https://m.media-amazon.com/images/I/61ai3+4wvcL._SX679_.jpg",
    description: "Open-style modern bookshelf",
    priceHour: 40,
    priceDay: 160,
  },
  {
    name: "Double Door Wardrobe",
    type: "Wardrobe",
    image: "https://m.media-amazon.com/images/I/61X+c5zvRaL._SX679_.jpg",
    description: "Spacious wardrobe with mirror",
    priceHour: 90,
    priceDay: 350,
  },
  {
    name: "Coffee Table (Glass Top)",
    type: "Table",
    image: "https://m.media-amazon.com/images/I/71BIowqFa+L._SX679_.jpg",
    description: "Modern design with storage rack",
    priceHour: 30,
    priceDay: 150,
  },
  {
    name: "Shoe Rack Wooden",
    type: "Storage",
    image: "https://m.media-amazon.com/images/I/71KZRGfy1mL._SX679_.jpg",
    description: "Shoe rack with seating and cabinet",
    priceHour: 25,
    priceDay: 100,
  },
  {
    name: "Recliner Chair",
    type: "Recliner",
    image: "https://m.media-amazon.com/images/I/61i+b2kFyUL._SX679_.jpg",
    description: "Manual recliner for comfort",
    priceHour: 70,
    priceDay: 300,
  },
];

const CategoryFurniture = () => {
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const visibleItems = showAll ? allItems : allItems.slice(0, 10);

  const toggleFavorite = (itemName) =>
    favorites.includes(itemName)
      ? setFavorites(favorites.filter((i) => i !== itemName))
      : setFavorites([...favorites, itemName]);

  const addToCart = (itemName) =>
    cart.includes(itemName) || setCart([...cart, itemName]);

  return (
    <div className="category-items-container">
      <h2 className="category-heading shimmer-text">Furniture 🛋️</h2>
      <p className="category-subheading">Rent beautiful furniture for home or office</p>
      <div className="items-grid">
        {visibleItems.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-image">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/220x160?text=Image+Not+Available")
                }
              />
              <div
                className={`favorite-icon ${favorites.includes(item.name) ? "active" : ""}`}
                onClick={() => toggleFavorite(item.name)}
              >
                ❤️
              </div>
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-desc">{item.description}</p>
              <div className="item-pricing">
                <span>₹{item.priceHour}/hr</span>
                <span>₹{item.priceDay}/day</span>
              </div>
              <button className="add-cart-btn" onClick={() => addToCart(item.name)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <button className="view-more-btn" onClick={() => setShowAll(true)}>
          View More ➕
        </button>
      )}
    </div>
  );
};

export default CategoryFurniture;


