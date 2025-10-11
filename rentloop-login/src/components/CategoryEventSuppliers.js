
import React, { useState } from "react";
import "./CategoryItems.css";

const allItems = [
  {
    name: "Event Tent",
    type: "Outdoor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5ia3NFgmH8ebRqDajpynfNl5tZzVH_6LwQ&s",
    description: "Large waterproof outdoor event tent",
    priceHour: 200,
    priceDay: 1500,
  },
  {
    name: "DJ Sound System",
    type: "Audio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxj7b_U1muzXuD5DADq2DKpeGaghys2QMNiw&s",
    description: "Powerful sound setup with subwoofers",
    priceHour: 500,
    priceDay: 3000,
  },
  {
    name: "Wedding Chairs",
    type: "Seating",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfSh48YDfOwo_OXAuRS-yML9zmFvLfPY2Tu9SUBmzKOEa3zGJFZdOgse0Q2KZQZ5cw7U&usqp=CAU",
    description: "Elegant chairs with decorations",
    priceHour: 30,
    priceDay: 150,
  },
  {
    name: "Flower Decoration",
    type: "Decor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ET9BjUl0slq6nROtDi4nXs-mnxjYWo8qWQ&s",
    description: "Full stage and entrance floral decor",
    priceHour: 400,
    priceDay: 2500,
  },
  {
    name: "Stage Setup",
    type: "Platform",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPacvv7kCsAYGKm904rvLW1upgJoNeiTn8dA&s",
    description: "Customizable event stage with lights",
    priceHour: 800,
    priceDay: 4500,
  },
  {
    name: "LED Display Screen",
    type: "Visual",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55XU4pFeIFl_0OdOTLbsZzTu3XhTuMlY5uw&s",
    description: "Large LED wall for live visuals",
    priceHour: 600,
    priceDay: 4000,
  },
  {
    name: "Event Lighting",
    type: "Lights",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZ0DyHJEosNYXCYQvWK7dcm4RBlvCxtkTaQ&s",
    description: "Multi-colored lighting effects",
    priceHour: 250,
    priceDay: 1800,
  },
  {
    name: "Buffet Table Setup",
    type: "Catering",
    image: "https://thumbs.dreamstime.com/b/event-catering-buffet-long-tables-draped-white-tablecloths-showcase-selection-dishes-elegant-buffet-setup-creating-317686445.jpg",
    description: "Full buffet table decor and setup",
    priceHour: 150,
    priceDay: 1000,
  },
  {
    name: "Projector & Screen",
    type: "Presentation",
    image: "https://avshack.in/cdn/shop/products/1_08c1c81d-8b1f-469e-9eae-bbaad6344393.jpg?v=1598129063&width=1500",
    description: "HD projector with large screen",
    priceHour: 300,
    priceDay: 2000,
  },
  {
    name: "Event Staff Support",
    type: "Staff",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZjp7gJsCruHfYXUXDBDi_zfU-CBIcyapQA&s",
    description: "Trained event management staff",
    priceHour: 100,
    priceDay: 800,
  },
];

const CategoryEventSuppliers = () => {
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const visibleItems = showAll ? allItems : allItems.slice(0, 10);

  const toggleFavorite = (itemName) =>
    favorites.includes(itemName)
      ? setFavorites(favorites.filter((i) => i !== itemName))
      : setFavorites([...favorites, itemName]);

  const addToCart = (itemName) => cart.includes(itemName) || setCart([...cart, itemName]);

  return (
    <div className="category-items-container">
      <h2 className="category-heading shimmer-text">Event Suppliers 🎉📦</h2>
      <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>
      <div className="items-grid">
        {visibleItems.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-image">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/220x160?text=Image+Not+Available")
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

export default CategoryEventSuppliers;


