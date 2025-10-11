// // src/components/CategoryBabyProducts.jsx
// import React, { useState } from "react";
// import "./CategoryItems.css";

// const allItems = [
//   {
//     name: "Baby Stroller",
//     type: "Stroller",
//     image: "https://m.media-amazon.com/images/I/71b5QlgN6ZL._SX679_.jpg",
//     description: "Foldable baby stroller with canopy and storage basket",
//     priceHour: 60,
//     priceDay: 250,
//   },
//   {
//     name: "Baby Cradle",
//     type: "Cradle",
//     image: "https://m.media-amazon.com/images/I/71qY1A0ME5L._SX679_.jpg",
//     description: "Swing cradle with mosquito net and wheels",
//     priceHour: 50,
//     priceDay: 200,
//   },
//   {
//     name: "High Chair",
//     type: "Chair",
//     image: "https://m.media-amazon.com/images/I/61EGD1BfS1L._SX679_.jpg",
//     description: "Adjustable feeding high chair with safety belt",
//     priceHour: 40,
//     priceDay: 180,
//   },
//   {
//     name: "Electric Sterilizer",
//     type: "Sterilizer",
//     image: "https://m.media-amazon.com/images/I/61WKK0tVRzL._SX679_.jpg",
//     description: "Sterilizer for baby feeding bottles and nipples",
//     priceHour: 30,
//     priceDay: 150,
//   },
//   {
//     name: "Baby Carrier Sling",
//     type: "Carrier",
//     image: "https://m.media-amazon.com/images/I/81ZKjdu1IfL._SX679_.jpg",
//     description: "Adjustable front and back baby carrier",
//     priceHour: 25,
//     priceDay: 100,
//   },
//   {
//     name: "Baby Bath Tub",
//     type: "Bath",
//     image: "https://m.media-amazon.com/images/I/61w2wYwMlhL._SX679_.jpg",
//     description: "Ergonomic bathtub with anti-slip base",
//     priceHour: 20,
//     priceDay: 80,
//   },
//   {
//     name: "Baby Play Gym",
//     type: "Toys",
//     image: "https://m.media-amazon.com/images/I/71DQ5M0c-0L._SX679_.jpg",
//     description: "Interactive play mat with hanging toys",
//     priceHour: 35,
//     priceDay: 140,
//   },
//   {
//     name: "Bottle Warmer",
//     type: "Warmer",
//     image: "https://m.media-amazon.com/images/I/71KUncTtgoL._SX679_.jpg",
//     description: "Instant bottle warmer for milk and food",
//     priceHour: 15,
//     priceDay: 60,
//   },
//   {
//     name: "Diaper Bag",
//     type: "Bag",
//     image: "https://m.media-amazon.com/images/I/81e+ptCMd4L._SX679_.jpg",
//     description: "Waterproof diaper bag with multiple compartments",
//     priceHour: 10,
//     priceDay: 50,
//   },
//   {
//     name: "Baby Walker",
//     type: "Walker",
//     image: "https://m.media-amazon.com/images/I/61F7WeYeLUL._SX679_.jpg",
//     description: "Musical baby walker with adjustable height",
//     priceHour: 45,
//     priceDay: 180,
//   },
// ];

// const CategoryBabyProducts = () => {
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
//       <h2 className="category-heading shimmer-text">Baby Products 👶</h2>
//       <p className="category-subheading">Rent safe and hygienic baby gear for comfort</p>
//       <div className="items-grid">
//         {visibleItems.map((item, index) => (
//           <div className="item-card" key={index}>
//             <div className="item-image">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 onError={(e) =>
//                   (e.target.src = "https://via.placeholder.com/220x160?text=No+Image")
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

// export default CategoryBabyProducts;


import React, { useState } from "react";
import axios from "axios";
import "./CategoryItems.css";

const baseURL = process.env.REACT_APP_API_URL;

const allItems = [/* ... same array as you provided ... */];

const CategoryBabyProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const visibleItems = showAll ? allItems : allItems.slice(0, 10);

  const toggleFavorite = async (item) => {
    const isFav = favorites.includes(item.name);
    const updatedFavorites = isFav
      ? favorites.filter((i) => i !== item.name)
      : [...favorites, item.name];

    setFavorites(updatedFavorites);

    try {
      await axios.post(`${baseURL}/favorites/add`, { item });
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  const addToCart = async (item) => {
    if (!cart.includes(item.name)) {
      setCart([...cart, item.name]);

      try {
        await axios.post(`${baseURL}/cart/add`, { item });
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  return (
    <div className="category-items-container">
      <h2 className="category-heading shimmer-text">Baby Products 👶</h2>
      <p className="category-subheading">Rent safe and hygienic baby gear for comfort</p>
      <div className="items-grid">
        {visibleItems.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-image">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/220x160?text=No+Image")
                }
              />
              <div
                className={`favorite-icon ${favorites.includes(item.name) ? "active" : ""}`}
                onClick={() => toggleFavorite(item)}
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
              <button className="add-cart-btn" onClick={() => addToCart(item)}>
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

export default CategoryBabyProducts;
