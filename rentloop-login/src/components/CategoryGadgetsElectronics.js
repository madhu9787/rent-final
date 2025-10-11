// import React, { useState } from "react";
// import "./CategoryItems.css"; // Use the same styling

// const allItems = [
//   {
//     name: "Apple iPhone 14 Pro",
//     type: "Smartphone",
//     image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg",
//     description: "128GB, Deep Purple",
//     priceHour: 80,
//     priceDay: 650,
//   },
//   {
//     name: "Samsung Galaxy Tab S8",
//     type: "Tablet",
//     image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg",
//     description: "11 inch LCD, Wi-Fi, 128GB",
//     priceHour: 60,
//     priceDay: 480,
//   },
//   {
//     name: "Sony WH-1000XM5",
//     type: "Headphones",
//     image: "https://m.media-amazon.com/images/I/51dJ7HcN0+L._SL1500_.jpg",
//     description: "Noise Cancelling Wireless",
//     priceHour: 40,
//     priceDay: 300,
//   },
//   {
//     name: "Apple Watch Series 9",
//     type: "Smartwatch",
//     image: "https://m.media-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg",
//     description: "GPS 41mm Midnight",
//     priceHour: 30,
//     priceDay: 250,
//   },
//   {
//     name: "GoPro HERO11",
//     type: "Action Camera",
//     image: "https://m.media-amazon.com/images/I/61G6wDOzjqL._SL1500_.jpg",
//     description: "5.3K60 Ultra HD Video",
//     priceHour: 50,
//     priceDay: 400,
//   },
//   {
//     name: "JBL PartyBox 110",
//     type: "Bluetooth Speaker",
//     image: "https://m.media-amazon.com/images/I/71t9xUYxrCL._SL1500_.jpg",
//     description: "160W Sound with Lights",
//     priceHour: 35,
//     priceDay: 280,
//   },
//   {
//     name: "Canon EOS 1500D",
//     type: "DSLR Camera",
//     image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
//     description: "24.1MP DSLR with 18-55mm Lens",
//     priceHour: 70,
//     priceDay: 550,
//   },
//   {
//     name: "OnePlus Buds Pro 2",
//     type: "Earbuds",
//     image: "https://m.media-amazon.com/images/I/51wqbBUDVIL._SL1500_.jpg",
//     description: "ANC + Dolby Atmos",
//     priceHour: 20,
//     priceDay: 160,
//   },
//   {
//     name: "Amazon Kindle Paperwhite",
//     type: "E-Reader",
//     image: "https://m.media-amazon.com/images/I/61G1tPMN4RL._SL1000_.jpg",
//     description: "6.8\" Display, Waterproof",
//     priceHour: 25,
//     priceDay: 200,
//   },
//   {
//     name: "Mi 360 Security Camera",
//     type: "Surveillance",
//     image: "https://m.media-amazon.com/images/I/61Yqjtp1WFL._SL1500_.jpg",
//     description: "1080p with Night Vision",
//     priceHour: 15,
//     priceDay: 120,
//   },
//   {
//     name: "DJI Mini SE Drone",
//     type: "Drone",
//     image: "https://m.media-amazon.com/images/I/61jqg9n7+GL._SL1500_.jpg",
//     description: "2.7K Camera & 30 min Flight",
//     priceHour: 90,
//     priceDay: 700,
//   },
//   {
//     name: "Logitech MX Master 3S",
//     type: "Mouse",
//     image: "https://m.media-amazon.com/images/I/61yUXzZy+dL._SL1500_.jpg",
//     description: "Advanced Ergonomic Mouse",
//     priceHour: 10,
//     priceDay: 80,
//   }
// ];

// const CategoryGadgetsElectronics = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);

//   const visibleItems = showAll ? allItems : allItems.slice(0, 10);

//   const toggleFavorite = (itemName) => {
//     if (favorites.includes(itemName)) {
//       setFavorites(favorites.filter((i) => i !== itemName));
//     } else {
//       setFavorites([...favorites, itemName]);
//     }
//   };

//   const addToCart = (itemName) => {
//     if (!cart.includes(itemName)) {
//       setCart([...cart, itemName]);
//     }
//   };

//   return (
//     <div className="category-items-container">
//       <h2 className="category-heading shimmer-text">Gadgets & Electronics 🎮</h2>
//       <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>

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

//       {!showAll && (
//         <button className="view-more-btn" onClick={() => setShowAll(true)}>
//           View More ➕
//         </button>
//       )}
//     </div>
//   );
// };

// export default CategoryGadgetsElectronics;
// import React, { useState } from "react";
// import "./CategoryItems.css";

// const allItems = [
//   {
//     name: "Apple iPhone 14 Pro",
//     type: "Smartphone",
//     image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg",
//     description: "128GB, Deep Purple",
//     priceHour: 80,
//     priceDay: 650,
//   },
//   {
//     name: "Samsung Galaxy Tab S8",
//     type: "Tablet",
//     image: "https://m.media-amazon.com/images/I/61kWB+uzR2L._SL1500_.jpg",
//     description: "11 inch LCD, Wi-Fi, 128GB",
//     priceHour: 60,
//     priceDay: 480,
//   },
//   {
//     name: "Sony WH-1000XM5",
//     type: "Headphones",
//     image: "https://m.media-amazon.com/images/I/51dJ7HcN0+L._SL1500_.jpg",
//     description: "Noise Cancelling Wireless",
//     priceHour: 40,
//     priceDay: 300,
//   },
//   {
//     name: "Apple Watch Series 9",
//     type: "Smartwatch",
//     image: "https://m.media-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg",
//     description: "GPS 41mm Midnight",
//     priceHour: 30,
//     priceDay: 250,
//   },
//   {
//     name: "GoPro HERO11",
//     type: "Action Camera",
//     image: "https://m.media-amazon.com/images/I/61G6wDOzjqL._SL1500_.jpg",
//     description: "5.3K60 Ultra HD Video",
//     priceHour: 50,
//     priceDay: 400,
//   },
//   {
//     name: "JBL PartyBox 110",
//     type: "Bluetooth Speaker",
//     image: "https://m.media-amazon.com/images/I/71t9xUYxrCL._SL1500_.jpg",
//     description: "160W Sound with Lights",
//     priceHour: 35,
//     priceDay: 280,
//   },
//   {
//     name: "Canon EOS 1500D",
//     type: "DSLR Camera",
//     image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg",
//     description: "24.1MP DSLR with 18-55mm Lens",
//     priceHour: 70,
//     priceDay: 550,
//   },
//   {
//     name: "OnePlus Buds Pro 2",
//     type: "Earbuds",
//     image: "https://m.media-amazon.com/images/I/51wqbBUDVIL._SL1500_.jpg",
//     description: "ANC + Dolby Atmos",
//     priceHour: 20,
//     priceDay: 160,
//   },
//   {
//     name: "Amazon Kindle Paperwhite",
//     type: "E-Reader",
//     image: "https://m.media-amazon.com/images/I/61G1tPMN4RL._SL1000_.jpg",
//     description: "6.8\" Display, Waterproof",
//     priceHour: 25,
//     priceDay: 200,
//   },
//   {
//     name: "Mi 360 Security Camera",
//     type: "Surveillance",
//     image: "https://m.media-amazon.com/images/I/61Yqjtp1WFL._SL1500_.jpg",
//     description: "1080p with Night Vision",
//     priceHour: 15,
//     priceDay: 120,
//   },
//   {
//     name: "DJI Mini SE Drone",
//     type: "Drone",
//     image: "https://m.media-amazon.com/images/I/61jqg9n7+GL._SL1500_.jpg",
//     description: "2.7K Camera & 30 min Flight",
//     priceHour: 90,
//     priceDay: 700,
//   },
//   {
//     name: "Logitech MX Master 3S",
//     type: "Mouse",
//     image: "https://m.media-amazon.com/images/I/61yUXzZy+dL._SL1500_.jpg",
//     description: "Advanced Ergonomic Mouse",
//     priceHour: 10,
//     priceDay: 80,
//   }
// ];

// const CategoryGadgetsElectronics = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [favorites, setFavorites] = useState([]);
//   const [cart, setCart] = useState([]);

//   const visibleItems = showAll ? allItems : allItems.slice(0, 10);

//   const toggleFavorite = (itemName) => {
//     if (favorites.includes(itemName)) {
//       setFavorites(favorites.filter((i) => i !== itemName));
//     } else {
//       setFavorites([...favorites, itemName]);
//     }
//   };

//   const addToCart = (itemName) => {
//     if (!cart.includes(itemName)) {
//       setCart([...cart, itemName]);
//     }
//   };

//   return (
//     <div className="category-items-container">
//       <h2 className="category-heading shimmer-text">Gadgets & Electronics 🎮</h2>
//       <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>

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

//       {!showAll && (
//         <button className="view-more-btn" onClick={() => setShowAll(true)}>
//           View More ➕
//         </button>
//       )}
//     </div>
//   );
// };

// export default CategoryGadgetsElectronics;
import React, { useState } from "react";
import "./CategoryItems.css";

const allItems = [
  {
    name: "Apple iPhone 14 Pro",
    type: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    description: "128GB, Deep Purple",
    priceHour: 80,
    priceDay: 650,
  },
  {
    name: "Samsung Galaxy Tab S8",
    type: "Tablet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaY2LrEs62_Ni1XYL80oYhbFEMiaMe3G0qaA&s",
    description: "11 inch LCD, Wi-Fi, 128GB",
    priceHour: 60,
    priceDay: 480,
  },
  {
    name: "Sony WH-1000XM5",
    type: "Headphones",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoKI0t9eqlse6cG-CdGXuBxwBrP4493r0-g&s",
    description: "Noise Cancelling Wireless",
    priceHour: 40,
    priceDay: 300,
  },
  {
    name: "Apple Watch Series 9",
    type: "Smartwatch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3qWuhrB7-iCI69ME2tEceM-bjDHNGl_P8SQ&s",
    description: "GPS 41mm Midnight",
    priceHour: 30,
    priceDay: 250,
  },
  {
    name: "GoPro HERO11",
    type: "Action Camera",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmrrQv7OGz_ZS3MHsPTrbh6eynCSj774rRYg&s",
    description: "5.3K60 Ultra HD Video",
    priceHour: 50,
    priceDay: 400,
  },
  {
    name: "JBL PartyBox 110",
    type: "Bluetooth Speaker",
    image: "https://www.thesoundfactor.com/cdn/shop/products/21213.jpg?v=1652443468",
    description: "160W Sound with Lights",
    priceHour: 35,
    priceDay: 280,
  },
  {
    name: "Canon EOS 1500D",
    type: "DSLR Camera",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiBdryxd0pbASa0kdhSE-75wU3nR35PI_apA&s",
    description: "24.1MP DSLR with 18-55mm Lens",
    priceHour: 70,
    priceDay: 550,
  },
  {
    name: "OnePlus Buds Pro 2",
    type: "Earbuds",
    image: "https://m.media-amazon.com/images/I/51h7CQTRJ1L.jpg",
    description: "ANC + Dolby Atmos",
    priceHour: 20,
    priceDay: 160,
  },
  {
    name: "Amazon Kindle Paperwhite",
    type: "E-Reader",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlAi9nS0cS91Zq3WOj3n_jjmQKcmfeRu3FdQ&s",
    description: "6.8\" Display, Waterproof",
    priceHour: 25,
    priceDay: 200,
  },
  {
    name: "Mi 360 Security Camera",
    type: "Surveillance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jNni2RldjS9S75hQZtOIIilN-iU15aEb_g&s",
    description: "1080p with Night Vision",
    priceHour: 15,
    priceDay: 120,
  },
  {
    name: "DJI Mini SE Drone",
    type: "Drone",
    image: "https://m.media-amazon.com/images/I/61al5gk0FyL._UF1000,1000_QL80_.jpg",
    description: "2.7K Camera & 30 min Flight",
    priceHour: 90,
    priceDay: 700,
  },
  {
    name: "Logitech MX Master 3S",
    type: "Mouse",
    image: "https://www.portronics.com/cdn/shop/files/Image1_5067bdd1-4473-4933-a66d-edcb4d49409a.png?v=1720258592&width=1445",
    description: "Advanced Ergonomic Mouse",
    priceHour: 10,
    priceDay: 80,
  }
];

const CategoryGadgetsElectronics = () => {
  const [showAll, setShowAll] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const visibleItems = showAll ? allItems : allItems.slice(0, 10);

  const toggleFavorite = (itemName) => {
    if (favorites.includes(itemName)) {
      setFavorites(favorites.filter((i) => i !== itemName));
    } else {
      setFavorites([...favorites, itemName]);
    }
  };

  const addToCart = (itemName) => {
    if (!cart.includes(itemName)) {
      setCart([...cart, itemName]);
    }
  };

  return (
    <div className="category-items-container">
      <h2 className="category-heading shimmer-text">Gadgets & Electronics 🎮</h2>
      <p className="category-subheading">Click an item to rent or add to wishlist/cart</p>

      <div className="items-grid">
        {visibleItems.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-image">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => (e.target.src = "https://via.placeholder.com/220x160?text=Image+Not+Available")}
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

export default CategoryGadgetsElectronics;

