// import React, { useState } from "react";
// import "./SearchAndFilter.css";

// const categories = [
//   { name: "Vehicles", icon: "📦" },
//   { name: "Home Appliances", icon: "📺" },
//   { name: "Gadgets & Electronics", icon: "📱" },
//   { name: "Fashion & Clothing", icon: "👗" },
//   { name: "Event Suppliers", icon: "🎪" },
//   { name: "Tools & Equipment", icon: "🛠" },
//   { name: "Travel & Luggage", icon: "🧳" },
//   { name: "Furniture", icon: "🪑" },
//   { name: "Baby Products", icon: "🍼" },
//   { name: "Books & Stationery", icon: "📚" },
// ];

// const SearchAndFilter = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredCategories = categories.filter((cat) =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="search-container">
//       <div className="animated-header">Explore by Category ✨</div>

//       <input
//         type="text"
//         placeholder="Search category..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-box"
//       />

//       <div className="category-card-grid">
//         {filteredCategories.map((category, index) => (
//           <div key={index} className="category-card">
//             <div className="category-icon">{category.icon}</div>
//             <div className="category-name">{category.name}</div>
//           </div>
//         ))}
//       </div>

//       <div className="floating-decor">🎈</div>
//       <div className="floating-decor two">✨</div>
//     </div>
//   );
// };

// export default SearchAndFilter;
// import React, { useState } from "react";
// import "./SearchAndFilter.css";

// const allCategories = [
//   { name: "Vehicles", icon: "🚗" },
//   { name: "Home Appliances", icon: "📺" },
//   { name: "Gadgets & Electronics", icon: "📱" },
//   { name: "Fashion & Clothing", icon: "👗" },
//   { name: "Event Suppliers", icon: "🎪" },
//   { name: "Tools & Equipment", icon: "🛠️" },
//   { name: "Travel & Luggage", icon: "🧳" },
//   { name: "Furniture", icon: "🪑" },
//   { name: "Baby Products", icon: "🍼" },
//   { name: "Books & Stationery", icon: "📚" },
//   { name: "Sports & Fitness", icon: "🏋️‍♂️" },
//   { name: "Gaming", icon: "🎮" },
//   { name: "Musical Instruments", icon: "🎸" },
//   { name: "Pet Supplies", icon: "🐾" },
//   { name: "Camping & Outdoor", icon: "🏕️" },
//   { name: "Beauty Products", icon: "💄" }
// ];

// const SearchAndFilter = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAll, setShowAll] = useState(false);

//   const filtered = allCategories.filter((cat) =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const visibleCategories = showAll ? filtered : filtered.slice(0, 10);

//   return (
//     <div className="search-container">
//       <div className="animated-header">✨ Explore by Category ✨</div>

//       <input
//         type="text"
//         placeholder="Search any category..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-box"
//       />

//       <div className="category-card-grid">
//         {visibleCategories.map((category, index) => (
//           <div key={index} className="category-card">
//             <div className="category-icon">{category.icon}</div>
//             <div className="category-name">{category.name}</div>
//           </div>
//         ))}
//       </div>

//       {!showAll && filtered.length > 10 && (
//         <button className="view-more-btn" onClick={() => setShowAll(true)}>
//           View More ➕
//         </button>
//       )}

//       <div className="floating-decor">🎈</div>
//       <div className="floating-decor two">🌟</div>
//     </div>
//   );
// };

// export default SearchAndFilter;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchAndFilter.css";

// const categories = [
//   { name: "Vehicles", icon: "📦" },
//   { name: "Home Appliances", icon: "📺" },
//   { name: "Gadgets & Electronics", icon: "📱" },
//   { name: "Fashion & Clothing", icon: "👗" },
//   { name: "Event Suppliers", icon: "🎪" },
//   { name: "Tools & Equipment", icon: "🛠" },
//   { name: "Travel & Luggage", icon: "🧳" },
//   { name: "Furniture", icon: "🪑" },
//   { name: "Baby Products", icon: "🍼" },
//   { name: "Books & Stationery", icon: "📚" },
// ];

// const SearchAndFilter = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAll, setShowAll] = useState(false);

//   const filteredCategories = categories.filter((cat) =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleClick = (categoryName) => {
//     // Navigate to the corresponding category page
//     if (categoryName === "Vehicles") navigate("/category-items");
//     else if (categoryName === "Home Appliances") navigate("/home-appliances");
//     else if (categoryName === "Gadgets & Electronics") navigate("/gadgets-electronics");
//     else if (categoryName === "Fashion & Clothing") navigate("/fashion-clothing");
//     else if (categoryName === "Event Suppliers") navigate("/event-suppliers");
//     else if (categoryName === "Tools & Equipment") navigate("/tools-equipment");
//     else if (categoryName === "Travel & Luggage") navigate("/travel-luggage");
//     else if (categoryName === "Furniture") navigate("/furniture");
//     else if (categoryName === "Baby Products") navigate("/baby-products");
//     else if (categoryName === "Books & Stationery") navigate("/books-stationery");
//   };

//   const visibleCategories = showAll ? filteredCategories : filteredCategories.slice(0, 6);

//   return (
//     <div className="search-container">
//       <div className="animated-header">Explore by Category ✨</div>

//       <input
//         type="text"
//         placeholder="Search category..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-box"
//       />

//       <div className="category-card-grid">
//         {visibleCategories.map((category, index) => (
//           <div
//             key={index}
//             className="category-card"
//             onClick={() => handleClick(category.name)}
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

// export default SearchAndFilter;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchAndFilter.css";

// const categories = [
//   { name: "Vehicles", icon: "📦" },
//   { name: "Home Appliances", icon: "📺" },
//   { name: "Gadgets & Electronics", icon: "📱" },
//   { name: "Fashion & Clothing", icon: "👗" },
//   { name: "Event Suppliers", icon: "🎪" },
//   { name: "Tools & Equipment", icon: "🛠" },
//   { name: "Travel & Luggage", icon: "🧳" },
//   { name: "Furniture", icon: "🪑" },
//   { name: "Baby Products", icon: "🍼" },
//   { name: "Books & Stationery", icon: "📚" },
// ];

// const SearchAndFilter = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAll, setShowAll] = useState(false);

//   const filteredCategories = categories.filter((cat) =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleClick = (categoryName) => {
//     // Navigate to the corresponding category page
//     if (categoryName === "Vehicles") navigate("/category-items");
//     else if (categoryName === "Home Appliances") navigate("/home-appliances");
//     else if (categoryName === "Gadgets & Electronics") navigate("/gadgets-electronics");
//     else if (categoryName === "Fashion & Clothing") navigate("/fashion-clothing");
//     else if (categoryName === "Event Suppliers") navigate("/event-suppliers");
//     else if (categoryName === "Tools & Equipment") navigate("/tools-equipment");
//     else if (categoryName === "Travel & Luggage") navigate("/travel-luggage");
//     else if (categoryName === "Furniture") navigate("/furniture");
//     else if (categoryName === "Baby Products") navigate("/baby-products");
//     else if (categoryName === "Books & Stationery") navigate("/books-stationery");
//   };

//   const visibleCategories = showAll ? filteredCategories : filteredCategories.slice(0, 6);

//   return (
//     <div className="search-container">
//       <div className="animated-header">Explore by Category ✨</div>

//       <input
//         type="text"
//         placeholder="Search category..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-box"
//       />

//       <div className="category-card-grid">
//         {visibleCategories.map((category, index) => (
//           <div
//             key={index}
//             className="category-card"
//             onClick={() => handleClick(category.name)}
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

// export default SearchAndFilter;


//new




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchAndFilter.css";

const categories = [
  { name: "Vehicles", icon: "📦", path: "/category-items" },
  { name: "Home Appliances", icon: "📺", path: "/home-appliances" },
  { name: "Gadgets & Electronics", icon: "📱", path: "/gadgets-electronics" },
  { name: "Fashion & Clothing", icon: "👗", path: "/fashion-clothing" },
  { name: "Event Suppliers", icon: "🎪", path: "/event-supplies" },
  { name: "Tools & Equipment", icon: "🛠", path: "/tools-equipment" },
  { name: "Travel & Luggage", icon: "🧳", path: "/travel-luggage" },
  { name: "Furniture", icon: "🪑", path: "/furniture" },
  { name: "Baby Products", icon: "🍼", path: "/baby-products" },
  { name: "Books & Stationery", icon: "📚", path: "/books-stationery" },
];

const SearchAndFilter = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleCategories = showAll ? filteredCategories : filteredCategories.slice(0, 6);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="search-container">
      <div className="animated-header">Explore by Category ✨</div>

      <input
        type="text"
        placeholder="Search category..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      <div className="category-card-grid">
        {visibleCategories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleClick(category.path)}
          >
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>

      {!showAll && filteredCategories.length > 6 && (
        <button className="view-more-btn" onClick={() => setShowAll(true)}>
          View More ➕
        </button>
      )}

      {/* Floating decorations */}
      <div className="floating-decor">🎈</div>
      <div className="floating-decor two">✨</div>
    </div>
  );
};

export default SearchAndFilter;

//old


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./SearchAndFilter.css";

// const SearchAndFilter = () => {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showAll, setShowAll] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchCategories = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         // Replace with your backend endpoint
//         const response = await axios.get("/api/categories");
//         setCategories(response.data.categories || []);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch categories. Please try again later.");
//       }
//       setLoading(false);
//     };

//     fetchCategories();
//   }, []);

//   const filteredCategories = categories.filter((cat) =>
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const visibleCategories = showAll ? filteredCategories : filteredCategories.slice(0, 6);

//   const handleClick = (path) => {
//     navigate(path);
//   };

//   if (loading) return <div className="loading">Loading categories...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="search-container">
//       <div className="animated-header">Explore by Category ✨</div>

//       <input
//         type="text"
//         placeholder="Search category..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-box"
//       />

//       <div className="category-card-grid">
//         {visibleCategories.map((category, index) => (
//           <div
//             key={index}
//             className="category-card"
//             onClick={() => handleClick(category.path)}
//           >
//             <div className="category-icon">{category.icon}</div>
//             <div className="category-name">{category.name}</div>
//           </div>
//         ))}
//       </div>

//       {!showAll && filteredCategories.length > 6 && (
//         <button className="view-more-btn" onClick={() => setShowAll(true)}>
//           View More ➕
//         </button>
//       )}

//       {/* Floating decorations */}
//       <div className="floating-decor">🎈</div>
//       <div className="floating-decor two">✨</div>
//     </div>
//   );
// };

// export default SearchAndFilter;
