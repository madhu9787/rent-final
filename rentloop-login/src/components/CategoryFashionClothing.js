import React, { useState } from "react";
import "./CategoryItems.css";

const allItems = [
  {
    name: "Men's T-Shirt",
    type: "Tops",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGzvUoQ9AmxK1sPA2wSawsiGc0MpuRTq4bpOoN_L0dRM_P6K4ixnu-uSc772yi9pITUTc&usqp=CAU",
    description: "Cotton crew neck t-shirt",
    priceHour: 10,
    priceDay: 70,
  },
  {
    name: "Women's Kurti",
    type: "Ethnic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYGWk7hBIkaaEJUbl09HLOQUDHfT9Upj-Bw&s",
    description: "Printed cotton kurti",
    priceHour: 15,
    priceDay: 100,
  },
  {
    name: "Men's Jeans",
    type: "Bottoms",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFOpfzhvrse-LQI_nfz0fnfMPC2E5SNIN1Kg&s",
    description: "Slim fit denim jeans",
    priceHour: 12,
    priceDay: 80,
  },
  {
    name: "Women's Lehenga",
    type: "Traditional",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9OdTJ2mXsFb8hMZdpazzd8q2mqWv3ofI0A&s",
    description: "Designer bridal lehenga",
    priceHour: 30,
    priceDay: 200,
  },
  {
    name: "Men's Sherwani",
    type: "Ethnic Wear",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fam6acs9KkS5RWZGPqV2fi4QZxmp2T6ztw&s",
    description: "Wedding sherwani",
    priceHour: 25,
    priceDay: 180,
  },
  {
    name: "Women’s Party Gown",
    type: "Western",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQff1Hm2avc-lH7lkdCdC0C8LrxmpjedlQ11g&s",
    description: "Evening party gown",
    priceHour: 20,
    priceDay: 150,
  },
  {
    name: "Men’s Jacket",
    type: "Winter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6iViqqBoBx_tQvTshfhVJhu5dilfKzt6_Q&s",
    description: "Zipper winter jacket",
    priceHour: 18,
    priceDay: 120,
  },
  {
    name: "Women’s Saree",
    type: "Traditional",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iZIHeXUhsCVIyUAz-Ppnq8Rb-4j0rkCITQ&s",
    description: "Designer saree with blouse",
    priceHour: 22,
    priceDay: 160,
  },
  {
    name: "Men’s Suit",
    type: "Formal",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=400&q=80",
    description: "2-piece formal suit",
    priceHour: 28,
    priceDay: 190,
  },
  {
    name: "Women’s Skirt",
    type: "Casual",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD7opkDgrsnQz35zPOmca4zpXZ8oQCnyuSA&s",
    description: "Pleated mini skirt",
    priceHour: 12,
    priceDay: 90,
  }
];

const CategoryFashionClothing = () => {
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
      <h2 className="category-heading shimmer-text">Fashion & Clothing 👗👔</h2>
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

export default CategoryFashionClothing;


