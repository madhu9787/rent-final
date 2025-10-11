
// import React, { useState } from "react";
// import "./CategoryItems.css";

// const allItems = [
//   {
//     name: "Electric Drill",
//     type: "Power Tool",
//     image: "https://m.media-amazon.com/images/I/71jxDSBx3WL._AC_UF1000,1000_QL80_.jpg",
//     description: "Cordless electric drill with multiple bits",
//     priceHour: 50,
//     priceDay: 300,
//   },
//   {
//     name: "Angle Grinder",
//     type: "Cutting Tool",
//     image: "https://www.cumminstools.com/media/catalog/product/cache/8f0f5a734c924d4c60ed9884e8f440b3/6/1/6193014.jpg",
//     description: "Handheld grinder for metal and stone",
//     priceHour: 70,
//     priceDay: 400,
//   },
//   {
//     name: "Welding Machine",
//     type: "Heavy Equipment",
//     image: "https://www.shreeequipments.com/assets/images/welding-machine.jpg",
//     description: "Arc welding machine with safety kit",
//     priceHour: 100,
//     priceDay: 600,
//   },
//   {
//     name: "Chainsaw",
//     type: "Gardening",
//     image: "https://5.imimg.com/data5/SELLER/Default/2023/7/325368681/AG/WA/MQ/17456795/electric-chainsaw.jpg",
//     description: "Electric chainsaw for wood cutting",
//     priceHour: 80,
//     priceDay: 500,
//   },
//   {
//     name: "Concrete Mixer",
//     type: "Construction",
//     image: "https://5.imimg.com/data5/SELLER/Default/2021/6/ZG/OZ/QZ/3346085/concrete-mixer-machine.jpg",
//     description: "Portable concrete mixing machine",
//     priceHour: 200,
//     priceDay: 1200,
//   },
//   {
//     name: "Ladder (15ft)",
//     type: "Utility",
//     image: "https://www.ikea.com/in/en/images/products/bekvaem-step-ladder__0711761_pe728599_s5.jpg",
//     description: "Foldable aluminum step ladder",
//     priceHour: 30,
//     priceDay: 150,
//   },
//   {
//     name: "Tile Cutter",
//     type: "Home Renovation",
//     image: "https://5.imimg.com/data5/YK/IV/MY-14133836/electric-tile-cutter-machine.jpg",
//     description: "Electric cutter for ceramic and marble tiles",
//     priceHour: 60,
//     priceDay: 350,
//   },
//   {
//     name: "Pressure Washer",
//     type: "Cleaning",
//     image: "https://m.media-amazon.com/images/I/71Xk8gR5uDL.jpg",
//     description: "High pressure washer for vehicles and walls",
//     priceHour: 100,
//     priceDay: 600,
//   },
//   {
//     name: "Air Compressor",
//     type: "Garage Tool",
//     image: "https://www.elgi.com/in/wp-content/uploads/sites/5/2020/01/oil-free-air-compressor.png",
//     description: "Compact air compressor for pneumatic tools",
//     priceHour: 90,
//     priceDay: 500,
//   },
//   {
//     name: "Lawn Mower",
//     type: "Garden Tool",
//     image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300679472/UE/TF/EO/56897396/electric-lawn-mower.jpg",
//     description: "Electric mower for garden lawn trimming",
//     priceHour: 80,
//     priceDay: 400,
//   },
// ];

// const CategoryToolsEquipment = () => {
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
//       <h2 className="category-heading shimmer-text">Tools & Equipment 🛠️🔧</h2>
//       <p className="category-subheading">Browse rental tools and heavy-duty equipment</p>
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

// export default CategoryToolsEquipment;

import React, { useState } from "react";
import "./CategoryItems.css";

const allItems = [
  {
    name: "Electric Drill",
    type: "Power Tool",
    image: "https://cdn.thewirecutter.com/wp-content/media/2020/12/powerdrills-2048px-0568.jpg?auto=webp&quality=75&width=1024",
    description: "Cordless electric drill with multiple bits",
    priceHour: 50,
    priceDay: 300,
  },
  {
    name: "Angle Grinder",
    type: "Cutting Tool",
    image: "https://m.media-amazon.com/images/I/61zjdUY6iqL._UF1000,1000_QL80_.jpg",
    description: "Handheld grinder for metal and stone",
    priceHour: 70,
    priceDay: 400,
  },
  {
    name: "Welding Machine",
    type: "Heavy Equipment",
    image: "https://images-cdn.ubuy.co.in/6669ac088d0bbb748c5792e3-arc-welder-200amp-110v-welding-machine.jpg",
    description: "Arc welding machine with safety kit",
    priceHour: 100,
    priceDay: 600,
  },
  {
    name: "Chainsaw",
    type: "Gardening",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJpVODsJh5Mc4B_Jk1rWPiR-VYnckrlLqSw&s",
    description: "Electric chainsaw for wood cutting",
    priceHour: 80,
    priceDay: 500,
  },
  {
    name: "Concrete Mixer",
    type: "Construction",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMMHw1JIaN3BIHJBV4L_eIwbGub8O7OCh6A&s",
    description: "Portable concrete mixing machine",
    priceHour: 200,
    priceDay: 1200,
  },
  {
    name: "Ladder (15ft)",
    type: "Utility",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV0uWRhATSwpYeOkcwa4KZsNS_iViawVG2g&s",
    description: "Foldable aluminum step ladder",
    priceHour: 30,
    priceDay: 150,
  },
  {
    name: "Tile Cutter",
    type: "Home Renovation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yxev0gIwr2Kk6iu15g2ppJ2FPo5dvPk7QQ&s",
    description: "Electric cutter for ceramic and marble tiles",
    priceHour: 60,
    priceDay: 350,
  },
  {
    name: "Pressure Washer",
    type: "Cleaning",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkYL4GntRjJt9D4zQ3fmJyhw7forwgy8S08A&s",
    description: "High pressure washer for vehicles and walls",
    priceHour: 100,
    priceDay: 600,
  },
  {
    name: "Air Compressor",
    type: "Garage Tool",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjxbqD9EoX_1GvPlFLk0L4gFUTsEpfAED5g&s",
    description: "Compact air compressor for pneumatic tools",
    priceHour: 90,
    priceDay: 500,
  },
  {
    name: "Lawn Mower",
    type: "Garden Tool",
    image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/34bb38b8-7231-4baa-b326-6e74fae5c32a.__CR0,0,600,450_PT0_SX600_V1___.jpg",
    description: "Electric mower for garden lawn trimming",
    priceHour: 80,
    priceDay: 400,
  },
];

const CategoryToolsEquipment = () => {
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
      <h2 className="category-heading shimmer-text">Tools & Equipment 🛠️🔧</h2>
      <p className="category-subheading">Browse rental tools and heavy-duty equipment</p>
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

export default CategoryToolsEquipment;
