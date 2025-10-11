
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- import navigate
import "./ItemListing.css";

const allCategories = [
  { name: "Vehicles", icon: "🛵" },
  { name: "Home Appliances", icon: "🏠" },
  { name: "Gadgets & Electronics", icon: "🎮" },
  { name: "Fashion & Clothing", icon: "👗" },
  { name: "Books & Stationery", icon: "📚" },
  { name: "Event Supplies", icon: "🎉" },
  { name: "Tools & Equipment", icon: "🧰" },
  { name: "Travel & Luggage", icon: "🧳" },
  { name: "Furniture", icon: "🪑" },
  { name: "Baby Products", icon: "🧒" },

  { name: "Pet Accessories", icon: "🐾" },
  { name: "Cameras & Lenses", icon: "📷" },
  { name: "Bikes & Bicycles", icon: "🚴‍♂️" },
  { name: "Kitchenware", icon: "🍽️" },
  { name: "Gaming Consoles", icon: "🕹️" },
  { name: "Gardening Tools", icon: "🪴" },
  { name: "Camping Gear", icon: "🏕️" },
  { name: "Medical Equipment", icon: "🏥" },
  { name: "Costumes", icon: "🥸" },
  { name: "Drones", icon: "🛸" }
];

const ItemListing = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate(); // <-- useNavigate hook

  const visibleCategories = showAll ? allCategories : allCategories.slice(0, 10);
const handleCategoryClick = (categoryName) => {
  if (categoryName === "Vehicles") {
    navigate("/category-items");
  } else if (categoryName === "Home Appliances") {
    navigate("/home-appliances");
  } else if (categoryName === "Gadgets & Electronics") {
    navigate("/gadgets-electronics");
  } else if (categoryName === "Fashion & Clothing") {
    navigate("/fashion-clothing"); // ✅ newly added
  }
  else if (categoryName === "Books & Stationery") {
  navigate("/books-stationery");
}
   else if (categoryName === "Event Supplies") {
    navigate("/event-supplies");
  } 
   else if (categoryName === "Tools & Equipment") {
    navigate("/tools-equipment");
  } 
  else if (categoryName === "Travel & Luggage") {
  navigate("/travel-luggage");
}
else if (categoryName === "Furniture") {
    navigate("/furniture"); // ✅ newly added
  } 
else if (categoryName === "Baby Products") {
    navigate("/baby-products"); // ✅ NEW
  }
 else {
    alert(`You selected: ${categoryName}`);
  }
};




  return (
    <div className="item-listing-container">
      <h2 className="item-heading shimmer-text">
        Let’s Find What You Need Today 🔍
      </h2>
      <p className="item-subheading">Choose a category to explore or list an item</p>

      <div className="category-grid">
        {visibleCategories.map((category, index) => (
          <div
            key={index}
            className="category-cards"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}a
      </div>

      {!showAll && (
        <button className="view-more-btn" onClick={() => setShowAll(true)}>
          View More ➕
        </button>
      )}
    </div>
  );
};

export default ItemListing;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // <-- import Axios
// import "./ItemListing.css";

// const ItemListing = () => {
//   const [allCategories, setAllCategories] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const visibleCategories = showAll ? allCategories : allCategories.slice(0, 10);

//   const handleCategoryClick = (categoryName) => {
//     switch (categoryName) {
//       case "Vehicles":
//         navigate("/category-items");
//         break;
//       case "Home Appliances":
//         navigate("/home-appliances");
//         break;
//       case "Gadgets & Electronics":
//         navigate("/gadgets-electronics");
//         break;
//       case "Fashion & Clothing":
//         navigate("/fashion-clothing");
//         break;
//       case "Books & Stationery":
//         navigate("/books-stationery");
//         break;
//       case "Event Supplies":
//         navigate("/event-supplies");
//         break;
//       case "Tools & Equipment":
//         navigate("/tools-equipment");
//         break;
//       case "Travel & Luggage":
//         navigate("/travel-luggage");
//         break;
//       case "Furniture":
//         navigate("/furniture");
//         break;
//       case "Baby Products":
//         navigate("/baby-products");
//         break;
//       default:
//         alert(`You selected: ${categoryName}`);
//     }
//   };

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("/api/categories"); // <-- your backend endpoint
//         setAllCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//         // Fallback if API fails
//         setAllCategories([
//           { name: "Vehicles", icon: "🛵" },
//           { name: "Home Appliances", icon: "🏠" },
//           { name: "Gadgets & Electronics", icon: "🎮" },
//           { name: "Fashion & Clothing", icon: "👗" },
//           { name: "Books & Stationery", icon: "📚" },
//           { name: "Event Supplies", icon: "🎉" },
//           { name: "Tools & Equipment", icon: "🧰" },
//           { name: "Travel & Luggage", icon: "🧳" },
//           { name: "Furniture", icon: "🪑" },
//           { name: "Baby Products", icon: "🧒" },
//           { name: "Pet Accessories", icon: "🐾" },
//           { name: "Cameras & Lenses", icon: "📷" },
//           { name: "Bikes & Bicycles", icon: "🚴‍♂️" },
//           { name: "Kitchenware", icon: "🍽️" },
//           { name: "Gaming Consoles", icon: "🕹️" },
//           { name: "Gardening Tools", icon: "🪴" },
//           { name: "Camping Gear", icon: "🏕️" },
//           { name: "Medical Equipment", icon: "🏥" },
//           { name: "Costumes", icon: "🥸" },
//           { name: "Drones", icon: "🛸" },
//         ]);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="item-listing-container">
//       <h2 className="item-heading shimmer-text">
//         Let’s Find What You Need Today 🔍
//       </h2>
//       <p className="item-subheading">Choose a category to explore or list an item</p>

//       <div className="category-grid">
//         {visibleCategories.map((category, index) => (
//           <div
//             key={index}
//             className="category-cards"
//             onClick={() => handleCategoryClick(category.name)}
//           >
//             <div className="category-icon">{category.icon}</div>
//             <div className="category-name">{category.name}</div>
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

// export default ItemListing;
