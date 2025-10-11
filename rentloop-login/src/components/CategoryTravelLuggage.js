// // src/components/CategoryTravelLuggage.jsx
// import React, { useState } from "react";
// import "./CategoryItems.css";

// const allItems = [
//   {
//     name: "American Tourister Trolley",
//     type: "Luggage",
//     image: "https://m.media-amazon.com/images/I/61s+YwBgyJL._SX679_.jpg",
//     description: "Spacious trolley bag with 360° wheels",
//     priceHour: 50,
//     priceDay: 300,
//   },
//   {
//     name: "Safari Hard Shell Luggage",
//     type: "Luggage",
//     image: "https://m.media-amazon.com/images/I/71vxMXh-7EL._SY741_.jpg",
//     description: "Durable hard shell suitcase for travel",
//     priceHour: 60,
//     priceDay: 350,
//   },
//   {
//     name: "Wildcraft Backpack 45L",
//     type: "Backpack",
//     image: "https://m.media-amazon.com/images/I/51aa9e+Sw2L._SY879_.jpg",
//     description: "Waterproof hiking and travel backpack",
//     priceHour: 40,
//     priceDay: 200,
//   },
//   {
//     name: "Skybags Trolley Combo",
//     type: "Combo Luggage",
//     image: "https://m.media-amazon.com/images/I/81OsRYAm5lL._SX679_.jpg",
//     description: "2-piece cabin and check-in luggage combo",
//     priceHour: 80,
//     priceDay: 450,
//   },
//   {
//     name: "Expandable Duffel Bag",
//     type: "Duffel",
//     image: "https://m.media-amazon.com/images/I/61L1L7NV3FL._SX679_.jpg",
//     description: "Lightweight duffel bag with shoe pocket",
//     priceHour: 30,
//     priceDay: 180,
//   },
//   {
//     name: "Laptop Travel Backpack",
//     type: "Utility",
//     image: "https://m.media-amazon.com/images/I/61G+W09eTwL._SX679_.jpg",
//     description: "USB charging and anti-theft design",
//     priceHour: 35,
//     priceDay: 190,
//   },
//   {
//     name: "Travel Packing Cubes",
//     type: "Organizer",
//     image: "https://m.media-amazon.com/images/I/71jENruoQrL._SX679_.jpg",
//     description: "6-piece travel organizer cube set",
//     priceHour: 20,
//     priceDay: 120,
//   },
//   {
//     name: "Neck Pillow & Eye Mask Set",
//     type: "Comfort Kit",
//     image: "https://m.media-amazon.com/images/I/61Z3OgBu6yL._SX679_.jpg",
//     description: "Memory foam pillow with accessories",
//     priceHour: 15,
//     priceDay: 80,
//   },
//   {
//     name: "Travel Shoe Bag",
//     type: "Accessory",
//     image: "https://m.media-amazon.com/images/I/71J1nhDJuEL._SX679_.jpg",
//     description: "Water-resistant shoe pouch for travel",
//     priceHour: 10,
//     priceDay: 50,
//   },
//   {
//     name: "Hard Luggage 3-Piece Set",
//     type: "Combo",
//     image: "https://m.media-amazon.com/images/I/71p0YtKHhaL._SX679_.jpg",
//     description: "Large, medium & cabin size set",
//     priceHour: 100,
//     priceDay: 600,
//   },
// ];

// const CategoryTravelLuggage = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);

//   const visibleItems = showAll ? allItems : allItems.slice(0, 10);

//   const toggleFavorite = (itemName) =>
//     favorites.includes(itemName)
//       ? setFavorites(favorites.filter((i) => i !== itemName))
//       : setFavorites([...favorites, itemName]);

//   const addToCart = (itemName) =>
//     cart.includes(itemName) || setCart([...cart, itemName]);

//   return (
//     <div className="category-items-container">
//       <h2 className="category-heading shimmer-text">Travel & Luggage 🧳</h2>
//       <p className="category-subheading">Rent travel essentials for your next trip</p>
//       <div className="items-grid">
//         {visibleItems.map((item, index) => (
//           <div className="item-card" key={index}>
//             <div className="item-image">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 onError={(e) =>
//                   (e.target.src =
//                     "https://via.placeholder.com/220x160?text=Image+Not+Available")
//                 }
//               />
//               <div
//                 className={`favorite-icon ${favorites.includes(item.name) ? "active" : ""}`}
//                 onClick={() => toggleFavorite(item.name)}
//               >
//                 ❤️
//               </div>
//             </div>
//             <div className="item-details">
//               <h3 className="item-name">{item.name}</h3>
//               <p className="item-desc">{item.description}</p>
//               <div className="item-pricing">
//                 <span>₹{item.priceHour}/hr</span>
//                 <span>₹{item.priceDay}/day</span>
//               </div>
//               <button className="add-cart-btn" onClick={() => addToCart(item.name)}>
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {!showAll && (
//         <button className="view-more-btn" onClick={() => setShowAll(true)}>
//           View More ➕
//         </button>
//       )}
//     </div>
//   );
// };

// export default CategoryTravelLuggage;


// src/components/CategoryTravelLuggage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryItems.css";
import { useNavigate } from "react-router-dom";

const CategoryTravelLuggage = () => {
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/travel-luggage"); // Replace with your API endpoint
        setAllItems(response.data);
      } catch (error) {
        console.error("Error fetching travel luggage data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const toggleFavorite = (itemName) => {
    setFavorites((prev) =>
      prev.includes(itemName) ? prev.filter((i) => i !== itemName) : [...prev, itemName]
    );
  };

  const addToCart = (itemName) => {
    if (!cart.includes(itemName)) setCart([...cart, itemName]);
  };

  const handleBuy = () => {
    navigate("/payment");
  };

  const visibleItems = showAll ? allItems : allItems.slice(0, 10);

  if (loading) return <p style={{ textAlign: "center", color: "gold" }}>Loading travel items...</p>;

  return (
    <div className="category-items-container">
      <h2 className="category-heading shimmer-text">Travel & Luggage 🧳</h2>
      <p className="category-subheading">Rent travel essentials for your next trip</p>

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
              <button
                className="add-cart-btn"
                onClick={() => addToCart(item.name)}
                disabled={cart.includes(item.name)}
              >
                {cart.includes(item.name) ? "Added ✅" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {!showAll && allItems.length > 10 && (
        <button className="view-more-btn" onClick={() => setShowAll(true)}>
          View More ➕
        </button>
      )}

      {cart.length > 0 && (
        <button
          className="proceed-btn"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "gold",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleBuy}
        >
          🛒 Proceed to Payment ({cart.length} items)
        </button>
      )}
    </div>
  );
};

export default CategoryTravelLuggage;
