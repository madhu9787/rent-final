
// import React, { useState } from "react";
// import "./CategoryItems.css";
// import CalendarModal from "./CalendarAvailability"; // Update path

// import { useNavigate } from "react-router-dom";



// const allItems = [
//   // Scooty
//   { name: "Honda Activa", type: "Scooty", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxlfwUJuqOr5v5vvMC3RmD0Ty7IqLUhLo9g&s", description: "Reliable scooter for city travel", priceHour: 50, priceDay: 400 },
//   { name: "TVS Jupiter", type: "Scooty", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz48TrZ1j52Qvp7W3vSWwRwB2jQG1iLlFd2w&s", description: "Smooth scooter for short trips", priceHour: 45, priceDay: 380 },
//   { name: "Suzuki Access", type: "Scooty", image: "https://i.pinimg.com/1200x/7a/cf/6c/7acf6c38680888de6eb0ea18b8957344.jpg", description: "Comfortable scooter for daily use", priceHour: 55, priceDay: 420 },
//   // Bikes
//   { name: "Royal Enfield", type: "Bike", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KFzEp69g2bra1S3a1lB00P03nZGoqKyh_g&s", description: "Powerful bike for long rides", priceHour: 100, priceDay: 800 },
//   { name: "Bajaj Pulsar", type: "Bike", image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45283/bajaj-pulsar-150-front-right-three-quarter2.jpeg?q=80", description: "Sporty bike for daily commute", priceHour: 90, priceDay: 700 },
//   { name: "KTM Duke", type: "Bike", image: "https://images.hindustantimes.com/auto/img/2025/02/14/600x338/2024_KTM_390_Duke_Review_4_1694926072249_1739511930304.jpg", description: "Stylish bike for adventure", priceHour: 120, priceDay: 950 },
//   // Cars
//   { name: "Suzuki Swift", type: "Car", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OR0ok1eISFFjCTHnsTW6mqETLCtywEm9CQ&s", description: "Compact car for family travel", priceHour: 150, priceDay: 1200 },
//   { name: "Toyota Innova", type: "Car", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8Jmf-HOg3Q8oxSgP9NRuB5un3QOSNV9k_A&s", description: "Comfortable car for group travel", priceHour: 200, priceDay: 1500 },
//   { name: "Honda City", type: "Car", image: "https://www.motoroids.com/wp-content/uploads/2014/03/New-2014-Honda-City-exterior-24.jpg", description: "Sedan car for family & business", priceHour: 180, priceDay: 1400 },
//   // Buses
//   { name: "Volvo AC Bus", type: "Bus", image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/107835/infographics1.png?isig=1&wm=0", description: "Comfortable bus for group travel", priceHour: 300, priceDay: 2500 },
//   { name: "Mercedes Bus", type: "Bus", image: "https://punetours.com/wp-content/uploads/2021/01/49-Seater-Mercedes-Benz-Bus.jpg", description: "Luxury bus with AC", priceHour: 350, priceDay: 2800 },
// ];

// const CategoryItems = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedType, setSelectedType] = useState("All");

//   const toggleFavorite = (itemName) => {
//     if (favorites.includes(itemName)) setFavorites(favorites.filter((i) => i !== itemName));
//     else setFavorites([...favorites, itemName]);
//   };

//   const addToCart = (itemName) => {
//     if (!cart.includes(itemName)) setCart([...cart, itemName]);
//   };

//   const filteredItems = selectedType === "All" 
//     ? allItems 
//     : allItems.filter(item => item.type === selectedType);

//   const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);
// const YourComponent = () => {
//   const navigate = useNavigate();

//   const handleBuy = () => {
//     navigate("/payment");
//   };

//   return (
//     <button onClick={handleBuy}>
//       🛒 Add to Cart / Proceed to Pay
//     </button>
//   );
// };

//   return (
//     <div className="category-items-container">
//       <h2 className="category-heading shimmer-text">Vehicles Rentals 🚗</h2>
//       <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>

//       {/* Type Filter */}
//       <div style={{ marginBottom: "20px" }}>
//         <label style={{ color: "gold", fontWeight: "bold", marginRight: "10px" }}>Filter by Type:</label>
//         <select
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//           style={{ padding: "6px 10px", borderRadius: "6px", border: "none" }}
//         >
//           <option value="All">All</option>
//           <option value="Scooty">Scooty</option>
//           <option value="Bike">Bike</option>
//           <option value="Car">Car</option>
//           <option value="Bus">Bus</option>
//         </select>
//       </div>

//       <div className="items-grid">
//         {visibleItems.map((item, index) => (
//           <div className="item-card" key={index}>
//             <div className="item-image">
//               <img src={item.image} alt={item.name} />
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

//       {!showAll && filteredItems.length > 6 && (
//         <button className="view-more-btn" onClick={() => setShowAll(true)}>
//           View More ➕
//         </button>
//       )}
//     </div>
//   );
// };

// export default CategoryItems;


//old



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./CategoryItems.css";
// import { useNavigate } from "react-router-dom";

// const CategoryVehicles = () => {
//   const [allItems, setAllItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAll, setShowAll] = useState(false);
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [selectedType, setSelectedType] = useState("All");

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await axios.get("/api/vehicles"); // Replace with your API endpoint
//         setAllItems(response.data);
//       } catch (error) {
//         console.error("Error fetching vehicle data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchItems();
//   }, []);

//   const toggleFavorite = (itemName) => {
//     setFavorites((prev) =>
//       prev.includes(itemName) ? prev.filter((i) => i !== itemName) : [...prev, itemName]
//     );
//   };

//   const addToCart = (itemName) => {
//     if (!cart.includes(itemName)) setCart([...cart, itemName]);
//   };

//   const handleBuy = () => {
//     navigate("/payment");
//   };

//   const filteredItems =
//     selectedType === "All"
//       ? allItems
//       : allItems.filter((item) => item.type === selectedType);

//   const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

//   if (loading) return <p style={{ textAlign: "center", color: "gold" }}>Loading vehicles...</p>;

//   return (
//     <div className="category-items-container">
//       <h2 className="category-heading shimmer-text">Vehicles Rentals 🚗</h2>
//       <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>

//       {/* Type Filter */}
//       <div style={{ marginBottom: "20px" }}>
//         <label style={{ color: "gold", fontWeight: "bold", marginRight: "10px" }}>
//           Filter by Type:
//         </label>
//         <select
//           value={selectedType}
//           onChange={(e) => setSelectedType(e.target.value)}
//           style={{ padding: "6px 10px", borderRadius: "6px", border: "none" }}
//         >
//           <option value="All">All</option>
//           <option value="Scooty">Scooty</option>
//           <option value="Bike">Bike</option>
//           <option value="Car">Car</option>
//           <option value="Bus">Bus</option>
//         </select>
//       </div>

//       <div className="items-grid">
//         {visibleItems.map((item, index) => (
//           <div className="item-card" key={index}>
//             <div className="item-image">
//               <img
//                 src={item.image}
//                 alt={item.name || "Vehicle"}
//                 onError={(e) =>
//                   (e.target.src = "https://via.placeholder.com/220x160?text=Image+Not+Available")
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
//               <button
//                 className="add-cart-btn"
//                 onClick={() => addToCart(item.name)}
//                 disabled={cart.includes(item.name)}
//               >
//                 {cart.includes(item.name) ? "Added ✅" : "Add to Cart"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredItems.length > 6 && (
//         <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
//           {showAll ? "View Less 🔼" : "View More ➕"}
//         </button>
//       )}

//       {cart.length > 0 && (
//         <button
//           className="proceed-btn"
//           style={{ marginTop: "20px", padding: "10px 20px", borderRadius: "8px", backgroundColor: "gold", fontWeight: "bold", border: "none", cursor: "pointer" }}
//           onClick={handleBuy}
//         >
//           🛒 Proceed to Payment ({cart.length} items)
//         </button>
//       )}
//     </div>
//   );
// };

// export default CategoryVehicles;


//new


//old

import React, { useState } from "react";
import "./CategoryItems.css";
import { useNavigate } from "react-router-dom";

const allItems = [
  // Scooty
  { name: "Honda Activa", type: "Scooty", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxlfwUJuqOr5v5vvMC3RmD0Ty7IqLUhLo9g&s", description: "Reliable scooter for city travel", priceHour: 50, priceDay: 400 },
  { name: "TVS Jupiter", type: "Scooty", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz48TrZ1j52Qvp7W3vSWwRwB2jQG1iLlFd2w&s", description: "Smooth scooter for short trips", priceHour: 45, priceDay: 380 },
  { name: "Suzuki Access", type: "Scooty", image: "https://i.pinimg.com/1200x/7a/cf/6c/7acf6c38680888de6eb0ea18b8957344.jpg", description: "Comfortable scooter for daily use", priceHour: 55, priceDay: 420 },
  // Bikes
  { name: "Royal Enfield", type: "Bike", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KFzEp69g2bra1S3a1lB00P03nZGoqKyh_g&s", description: "Powerful bike for long rides", priceHour: 100, priceDay: 800 },
  { name: "Bajaj Pulsar", type: "Bike", image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45283/bajaj-pulsar-150-front-right-three-quarter2.jpeg?q=80", description: "Sporty bike for daily commute", priceHour: 90, priceDay: 700 },
  { name: "KTM Duke", type: "Bike", image: "https://images.hindustantimes.com/auto/img/2025/02/14/600x338/2024_KTM_390_Duke_Review_4_1694926072249_1739511930304.jpg", description: "Stylish bike for adventure", priceHour: 120, priceDay: 950 },
  // Cars
  { name: "Suzuki Swift", type: "Car", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OR0ok1eISFFjCTHnsTW6mqETLCtywEm9CQ&s", description: "Compact car for family travel", priceHour: 150, priceDay: 1200 },
  { name: "Toyota Innova", type: "Car", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8Jmf-HOg3Q8oxSgP9NRuB5un3QOSNV9k_A&s", description: "Comfortable car for group travel", priceHour: 200, priceDay: 1500 },
  { name: "Honda City", type: "Car", image: "https://www.motoroids.com/wp-content/uploads/2014/03/New-2014-Honda-City-exterior-24.jpg", description: "Sedan car for family & business", priceHour: 180, priceDay: 1400 },
  // Buses
  { name: "Volvo AC Bus", type: "Bus", image: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/107835/infographics1.png?isig=1&wm=0", description: "Comfortable bus for group travel", priceHour: 300, priceDay: 2500 },
  { name: "Mercedes Bus", type: "Bus", image: "https://punetours.com/wp-content/uploads/2021/01/49-Seater-Mercedes-Benz-Bus.jpg", description: "Luxury bus with AC", priceHour: 350, priceDay: 2800 },
];

const CategoryItems = () => {
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedType, setSelectedType] = useState("All");
  const navigate = useNavigate();

  const toggleFavorite = (itemName) => {
    setFavorites(favorites.includes(itemName)
      ? favorites.filter((i) => i !== itemName)
      : [...favorites, itemName]);
  };

  const addToCart = (itemName) => {
    if (!cart.includes(itemName)) setCart([...cart, itemName]);
  };

  const handleBuy = () => {
    if (cart.length === 0) {
      alert("Please add items to cart before proceeding!");
      return;
    }
    navigate("/payment");
  };

  const filteredItems = selectedType === "All" 
    ? allItems 
    : allItems.filter(item => item.type === selectedType);

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <div className="category-items-container">
      <h2 className="category-heading shimmer-text">Vehicles Rentals 🚗</h2>
      <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>

      {/* Type Filter */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "gold", fontWeight: "bold", marginRight: "10px" }}>Filter by Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ padding: "6px 10px", borderRadius: "6px", border: "none" }}
        >
          <option value="All">All</option>
          <option value="Scooty">Scooty</option>
          <option value="Bike">Bike</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
        </select>
      </div>

      <div className="items-grid">
        {visibleItems.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
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

      {!showAll && filteredItems.length > 6 && (
        <button className="view-more-btn" onClick={() => setShowAll(true)}>
          View More ➕
        </button>
      )}

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button className="checkout-btn" onClick={handleBuy}>
          🛒 Add to Cart / Proceed to Pay ({cart.length} items)
        </button>
      </div>
    </div>
  );
};

export default CategoryItems;


