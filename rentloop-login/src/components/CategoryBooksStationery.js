// import React, { useState } from "react";
// import "./CategoryItems.css";

// const allItems = [
//   {
//     name: "Engineering Mathematics",
//     type: "Textbook",
//     image: "https://images.unsplash.com/photo-1611605698429-30c8d2512445?auto=format&fit=crop&w=400&q=80",
//     description: "Advanced math for engineers",
//     priceHour: 5,
//     priceDay: 30,
//   },
//   {
//     name: "Ball Pen Set",
//     type: "Stationery",
//     image: "https://images.unsplash.com/photo-1581093588401-0badd7f832c8?auto=format&fit=crop&w=400&q=80",
//     description: "Smooth writing pens (pack of 5)",
//     priceHour: 2,
//     priceDay: 10,
//   },
//   {
//     name: "A4 Notebook",
//     type: "Notebook",
//     image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80",
//     description: "200 pages ruled notebook",
//     priceHour: 3,
//     priceDay: 15,
//   },
//   {
//     name: "Drawing Kit",
//     type: "Art Supplies",
//     image: "https://images.unsplash.com/photo-1583337130417-3346a1a4b4ba?auto=format&fit=crop&w=400&q=80",
//     description: "Includes pencils, erasers, colors",
//     priceHour: 6,
//     priceDay: 40,
//   },
//   {
//     name: "English Grammar Book",
//     type: "Textbook",
//     image: "https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=400&q=80",
//     description: "Improve grammar & writing",
//     priceHour: 4,
//     priceDay: 25,
//   },
//   {
//     name: "Scientific Calculator",
//     type: "Electronics",
//     image: "https://images.unsplash.com/photo-1591738561688-cd41ec9f4f61?auto=format&fit=crop&w=400&q=80",
//     description: "Casio fx-991ES Plus",
//     priceHour: 8,
//     priceDay: 50,
//   },
//   {
//     name: "Sticky Notes Set",
//     type: "Stationery",
//     image: "https://images.unsplash.com/photo-1611042553484-25801b37f6e2?auto=format&fit=crop&w=400&q=80",
//     description: "Multicolor sticky notes",
//     priceHour: 1,
//     priceDay: 5,
//   },
//   {
//     name: "Fiction Novel - The Alchemist",
//     type: "Novel",
//     image: "https://images.unsplash.com/photo-1611078489935-6e9ba661d6d2?auto=format&fit=crop&w=400&q=80",
//     description: "Inspiring journey by Paulo Coelho",
//     priceHour: 5,
//     priceDay: 20,
//   },
//   {
//     name: "Clipboard with Paper",
//     type: "Stationery",
//     image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=400&q=80",
//     description: "For quick writing",
//     priceHour: 3,
//     priceDay: 10,
//   },
//   {
//     name: "File Folder Organizer",
//     type: "Stationery",
//     image: "https://images.unsplash.com/photo-1582572244504-77129ec7b059?auto=format&fit=crop&w=400&q=80",
//     description: "Holds A4 documents",
//     priceHour: 2,
//     priceDay: 12,
//   }
// ];

// const CategoryBooksStationery = () => {
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
//       <h2 className="category-heading shimmer-text">Books & Stationery 📚✏️</h2>
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

// export default CategoryBooksStationery;


import React, { useState } from "react";
import axios from "axios";
import "./CategoryItems.css";

const allItems = [
  {
    name: "Engineering Mathematics",
    type: "Textbook",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqU9QhZo2ZJDHyH4cvhNUMVUS2SVyd16nQ5A&s",
    description: "Advanced math for engineers",
    priceHour: 5,
    priceDay: 30,
  },
  {
    name: "Ball Pen Set",
    type: "Stationery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWm6FeWyA54osc6SFcdUVS1MtmeOyq5_n2w&s",
    description: "Smooth writing pens (pack of 5)",
    priceHour: 2,
    priceDay: 10,
  },
  {
    name: "A4 Notebook",
    type: "Notebook",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoczq4_5s1OTliCrXcBnppLcUh9efLHUdRw&s",
    description: "200 pages ruled notebook",
    priceHour: 3,
    priceDay: 15,
  },
  {
    name: "Drawing Kit",
    type: "Art Supplies",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmx3RSO1aW_hTSw_H36PGP8G6Aov9JCrvZMA&s",
    description: "Includes pencils, erasers, colors",
    priceHour: 6,
    priceDay: 40,
  },
  {
    name: "English Grammar Book",
    type: "Textbook",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhRRvVypl9KV1fu5-KQ10SM0jOX7T6BY0MA&s",
    description: "Improve grammar & writing",
    priceHour: 4,
    priceDay: 25,
  },
  {
    name: "Scientific Calculator",
    type: "Electronics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBlY2UNxvr0K7Ua9cSvXJrAQ31llrhIPVUA&s",
    description: "Casio fx-991ES Plus",
    priceHour: 8,
    priceDay: 50,
  },
  {
    name: "Sticky Notes Set",
    type: "Stationery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtA-0Vs0tqYSIiDjXPsFV-8KOy2UtxCnZxDJFLNlWUAqxZ4spHQQDj1R_hA_b5UdEl8Fg&usqp=CAU",
    description: "Multicolor sticky notes",
    priceHour: 1,
    priceDay: 5,
  },
  {
    name: "Fiction Novel - The Alchemist",
    type: "Novel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU83AdM2let5dkK0193QsVMLKT0k_AVoJucg&s",
    description: "Inspiring journey by Paulo Coelho",
    priceHour: 5,
    priceDay: 20,
  },
  {
    name: "Clipboard with Paper",
    type: "Stationery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF6ebJkU0vkX6b1eJwrjuPPkIVc08nbXjIvQ&s",
    description: "For quick writing",
    priceHour: 3,
    priceDay: 10,
  },
  {
    name: "File Folder Organizer",
    type: "Stationery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yzndh5BqWWR5hx7kxaGzUGybLL0mdkgvDw&s",
    description: "Holds A4 documents",
    priceHour: 2,
    priceDay: 12,
  }
];

const CategoryBooksStationery = () => {
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const visibleItems = showAll ? allItems : allItems.slice(0, 10);

  const toggleFavorite = (itemName) =>
    favorites.includes(itemName)
      ? setFavorites(favorites.filter((i) => i !== itemName))
      : setFavorites([...favorites, itemName]);

  const addToCart = async (item) => {
    if (cart.includes(item.name)) return;

    setCart([...cart, item.name]);

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/cart`, item);
      console.log(`${item.name} added to cart successfully.`);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  return (
    <div className="category-items-container">
      <h2 className="category-heading shimmer-text">Books & Stationery 📚✏️</h2>
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

export default CategoryBooksStationery;
