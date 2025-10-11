
// import React, { useState } from "react";
// import "./CategoryItems.css";

// const allItems = [
//   {
//     name: "LG Washing Machine",
//     type: "Washing Machine",
//     image: "https://www.sathya.store/img/product/nxjziQPmnp7FlSsP.png",
//     description: "Top-load washing machine",
//     priceHour: 30,
//     priceDay: 250,
//   },
//   {
//     name: "Whirlpool Microwave",
//     type: "Microwave",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMG3aM461TCrT7sldRqNj16cN0HmnCCMnjUQ&s",
//     description: "Convection microwave oven",
//     priceHour: 25,
//     priceDay: 200,
//   },
//   {
//     name: "Philips Mixer Grinder",
//     type: "Mixer",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlzD_pr3_uRyd9pynvbuJIRtoYdVbkS5YwQ&s",
//     description: "3-jar mixer with motor",
//     priceHour: 15,
//     priceDay: 100,
//   },
//   {
//     name: "Prestige Gas Stove",
//     type: "Stove",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTIfNJmFGMOrGtl440Cw8E9Ok7YGqTOoS4g&s",
//     description: "2‑burner glass top gas stove",
//     priceHour: 20,
//     priceDay: 150,
//   },
//   {
//     name: "Voltas Air Conditioner",
//     type: "AC",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMp2qMzmiQCKkR8rnzUYvjReKNWUm8Epamw&s",
//     description: "1.5 Ton Split AC",
//     priceHour: 60,
//     priceDay: 500,
//   },
//   {
//     name: "Panasonic LED TV",
//     type: "Television",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEecdaJLTpAjMoDRf2y9QQaI-9h4EeFAO5CA&s",
//     description: "32″ HD LED Smart TV",
//     priceHour: 35,
//     priceDay: 280,
//   },
//   {
//     name: "IFB Dishwasher",
//     type: "Dishwasher",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QEgiOJEQ4yTxlBr3ULw7XS3n20EHMBiJ6w&s",
//     description: "12‑place settings",
//     priceHour: 50,
//     priceDay: 400,
//   },
//   {
//     name: "Kent Water Purifier",
//     type: "Water Purifier",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8ErQjeXIksW1So3gknCci1cIOStnZjFujQ&s",
//     description: "RO + UV + UF technology",
//     priceHour: 20,
//     priceDay: 120,
//   },
//   {
//     name: "Bajaj Room Heater",
//     type: "Heater",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HbTy5v_zwHlza-j2EyoyP4YKAHAg7DjfWQ&s",
//     description: "Instant heating element",
//     priceHour: 10,
//     priceDay: 90,
//   },
//   {
//     name: "Orient Ceiling Fan",
//     type: "Fan",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNc7UibRJCdjkE8_0fk5wa1Et9iAxZb0cZA&s",
//     description: "Silent motor fan",
//     priceHour: 8,
//     priceDay: 60,
//   },
//   {
//     name: "Eureka Vacuum Cleaner",
//     type: "Vacuum Cleaner",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkQLtUsxd_ivDUx93keKjRSyweb8yiUzthw&s",
//     description: "Bagless cyclonic system",
//     priceHour: 20,
//     priceDay: 150,
//   }
// ];

// const CategoryHomeAppliances = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);

//   const visibleItems = showAll ? allItems : allItems.slice(0, 10);

//   const toggleFavorite = (itemName) =>
//     favorites.includes(itemName)
//       ? setFavorites(favorites.filter((i) => i !== itemName))
//       : setFavorites([...favorites, itemName]);

//   const addToCart = (itemName) => cart.includes(itemName) || setCart([...cart, itemName]);

//   return (
//     <div className="category-items-container">
//       <h2 className="category-heading shimmer-text">Home Appliances 🏠</h2>
//       <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>
//       <div className="items-grid">
//         {visibleItems.map((item, index) => (
//           <div className="item-card" key={index}>
//             <div className="item-image">
//               <img
//                 src={item.image}
//                 alt={item.name}
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

// export default CategoryHomeAppliances;
import React, { useState } from "react";
import "./CategoryItems.css";

const allItems = [
  {
    name: "LG Washing Machine",
    type: "Washing Machine",
    image: "https://www.sathya.store/img/product/nxjziQPmnp7FlSsP.png",
    description: "Top-load washing machine",
    priceHour: 30,
    priceDay: 250,
  },
  {
    name: "Whirlpool Microwave",
    type: "Microwave",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMG3aM461TCrT7sldRqNj16cN0HmnCCMnjUQ&s",
    description: "Convection microwave oven",
    priceHour: 25,
    priceDay: 200,
  },
  {
    name: "Philips Mixer Grinder",
    type: "Mixer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlzD_pr3_uRyd9pynvbuJIRtoYdVbkS5YwQ&s",
    description: "3-jar mixer with motor",
    priceHour: 15,
    priceDay: 100,
  },
  {
    name: "Prestige Gas Stove",
    type: "Stove",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTIfNJmFGMOrGtl440Cw8E9Ok7YGqTOoS4g&s",
    description: "2‑burner glass top gas stove",
    priceHour: 20,
    priceDay: 150,
  },
  {
    name: "Voltas Air Conditioner",
    type: "AC",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMp2qMzmiQCKkR8rnzUYvjReKNWUm8Epamw&s",
    description: "1.5 Ton Split AC",
    priceHour: 60,
    priceDay: 500,
  },
  {
    name: "Panasonic LED TV",
    type: "Television",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEecdaJLTpAjMoDRf2y9QQaI-9h4EeFAO5CA&s",
    description: "32″ HD LED Smart TV",
    priceHour: 35,
    priceDay: 280,
  },
  {
    name: "IFB Dishwasher",
    type: "Dishwasher",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QEgiOJEQ4yTxlBr3ULw7XS3n20EHMBiJ6w&s",
    description: "12‑place settings",
    priceHour: 50,
    priceDay: 400,
  },
  {
    name: "Kent Water Purifier",
    type: "Water Purifier",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU8ErQjeXIksW1So3gknCci1cIOStnZjFujQ&s",
    description: "RO + UV + UF technology",
    priceHour: 20,
    priceDay: 120,
  },
  {
    name: "Bajaj Room Heater",
    type: "Heater",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HbTy5v_zwHlza-j2EyoyP4YKAHAg7DjfWQ&s",
    description: "Instant heating element",
    priceHour: 10,
    priceDay: 90,
  },
  {
    name: "Orient Ceiling Fan",
    type: "Fan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNc7UibRJCdjkE8_0fk5wa1Et9iAxZb0cZA&s",
    description: "Silent motor fan",
    priceHour: 8,
    priceDay: 60,
  },
  {
    name: "Eureka Vacuum Cleaner",
    type: "Vacuum Cleaner",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkQLtUsxd_ivDUx93keKjRSyweb8yiUzthw&s",
    description: "Bagless cyclonic system",
    priceHour: 20,
    priceDay: 150,
  }
];

const CategoryHomeAppliances = () => {
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
      <h2 className="category-heading shimmer-text">Home Appliances 🏠</h2>
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

      {/* ✅ Added Cart Count Display */}
      {cart.length > 0 && (
        <div className="cart-count">
          🛒 Items in Cart: <strong>{cart.length}</strong>
        </div>
      )}
    </div>
  );
};

export default CategoryHomeAppliances;
