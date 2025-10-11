// import React, { useState } from "react";
// import "./UserProfile.css";

// const UserProfile = () => {
//   const [userType, setUserType] = useState("");

//   const handleSelect = (type) => {
//     setUserType(type);
//   };

//   // Dynamic title and subtitle based on user type
//   const getTitle = () => {
//     if (userType === "renter") return "Step into the world of effortless renting";
//     if (userType === "owner") return "Manage your assets like a pro";
//     if (userType === "both") return "Enjoy the best of both worlds";
//   };

//   const getSubtitle = () => {
//     if (userType === "renter") return "Find and rent your favorite items instantly";
//     if (userType === "owner") return "List, manage, and track your rental items easily";
//     if (userType === "both") return "Rent and earn with full control over your items";
//   };

//   return (
//     <div className="user-profile-container">
//       {!userType && (
//         <div className="selection-screen">
//           <h2 className="title">Choose Your Path in RentLoop</h2>
//           <div className="type-options">
//             <div className="type-card" onClick={() => handleSelect("renter")}>
//               <i className="fas fa-user icon" />
//               <p>Renter</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("owner")}>
//               <i className="fas fa-home icon" />
//               <p>Owner</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("both")}>
//               <i className="fas fa-exchange-alt icon" />
//               <p>Both</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {userType && (
//         <div className="form-screen">
//           <h2 className="title">{getTitle()}</h2>
//           <p className="subtitle">{getSubtitle()}</p>

//           <form className="user-form">
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Phone Number" required />
//             <input type="password" placeholder="New Password" required />
//             <button type="submit">Update Profile</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;


// import React, { useState } from "react";
// import "./UserProfile.css";

// const categories = [
//   "Vehicles",
//   "Home Appliances",
//   "Gadgets & Electronics",
//   "Fashion & Clothing",
//   "Books & Stationery",
//   "Event Supplies",
//   "Tools & Equipment",
//   "Travel & Luggage",
//   "Furniture",
//   "Baby Products",
// ];

// const UserProfile = () => {
//   const [userType, setUserType] = useState("");
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [itemData, setItemData] = useState({ name: "", description: "", price: "", image: null });

//   const handleSelect = (type) => setUserType(type);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true); // Show category upload section
//   };

//   const handleItemUpload = (e) => {
//     e.preventDefault();
//     console.log("Item Uploaded:", selectedCategory, itemData);
//     // Clear form after submission
//     setItemData({ name: "", description: "", price: "", image: null });
//     setSelectedCategory("");
//   };

//   return (
//     <div className="user-profile-container">
//       {!userType && (
//         <div className="selection-screen">
//           <h2 className="title">Choose Your Path in RentLoop</h2>
//           <div className="type-options">
//             <div className="type-card" onClick={() => handleSelect("renter")}>
//               <i className="fas fa-user icon" />
//               <p>Renter</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("owner")}>
//               <i className="fas fa-home icon" />
//               <p>Owner</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("both")}>
//               <i className="fas fa-exchange-alt icon" />
//               <p>Both</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {userType && (
//         <div className="form-upload-screen" style={{ display: "flex", gap: "30px" }}>
//           {/* Left: Profile Form */}
//           <div style={{ flex: 1 }}>
//             <h2 className="title">Update Your Profile</h2>
//             <form className="user-form" onSubmit={handleFormSubmit}>
//               <input type="text" placeholder="Full Name" required />
//               <input type="email" placeholder="Email" required />
//               <input type="text" placeholder="Phone Number" required />
//               <input type="password" placeholder="New Password" required />
//               <button type="submit">Save & Continue</button>
//             </form>
//           </div>

//           {/* Right: Category & Upload Section */}
//           {formSubmitted && (
//             <div style={{ flex: 1 }}>
//               {!selectedCategory && (
//                 <>
//                   <h3>Select a Category to Upload Item</h3>
//                   <div className="category-grid">
//                     {categories.map((cat, idx) => (
//                       <div
//                         key={idx}
//                         className="category-card"
//                         onClick={() => setSelectedCategory(cat)}
//                       >
//                         <p>{cat}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {selectedCategory && (
//                 <>
//                   <h3>Upload Item in: {selectedCategory}</h3>
//                   <form onSubmit={handleItemUpload}>
//                     <input
//                       type="text"
//                       placeholder="Item Name"
//                       value={itemData.name}
//                       onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
//                       required
//                     />
//                     <input
//                       type="text"
//                       placeholder="Description"
//                       value={itemData.description}
//                       onChange={(e) => setItemData({ ...itemData, description: e.target.value })}
//                       required
//                     />
//                     <input
//                       type="number"
//                       placeholder="Price"
//                       value={itemData.price}
//                       onChange={(e) => setItemData({ ...itemData, price: e.target.value })}
//                       required
//                     />
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => setItemData({ ...itemData, image: e.target.files[0] })}
//                       required
//                     />
//                     <button type="submit">Upload Item</button>
//                   </form>
//                   <button onClick={() => setSelectedCategory("")} style={{ marginTop: "10px" }}>
//                     ← Back to Categories
//                   </button>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
// import React, { useState } from "react";
// import "./UserProfile.css";

// const categories = [
//   { name: "Vehicles", icon: "🛵" },
//   { name: "Home Appliances", icon: "🏠" },
//   { name: "Gadgets & Electronics", icon: "🎮" },
//   { name: "Fashion & Clothing", icon: "👗" },
//   { name: "Books & Stationery", icon: "📚" },
//   { name: "Event Supplies", icon: "🎉" },
//   { name: "Tools & Equipment", icon: "🧰" },
//   { name: "Travel & Luggage", icon: "🧳" },
//   { name: "Furniture", icon: "🪑" },
//   { name: "Baby Products", icon: "🧒" }
// ];

// const UserProfile = () => {
//   const [userType, setUserType] = useState("");
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleSelect = (type) => setUserType(type);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//   };

//   const handleCategoryClick = (categoryName) => {
//     setSelectedCategory(categoryName);
//   };

//   const handleUploadSubmit = (e) => {
//     e.preventDefault();
//     alert("Item uploaded successfully!");
//     setSelectedCategory("");
//   };

//   return (
//     <div className="user-profile-container">
//       {/* Step 1: Select User Type */}
//       {!userType && (
//         <div className="selection-screen">
//           <h2 className="title">Choose Your Role</h2>
//           <div className="type-options">
//             <div className="type-card" onClick={() => handleSelect("renter")}>
//               <i className="fas fa-user icon" />
//               <p>Renter</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("owner")}>
//               <i className="fas fa-home icon" />
//               <p>Owner</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("both")}>
//               <i className="fas fa-exchange-alt icon" />
//               <p>Both</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Step 2: Owner Form */}
//       {userType && !formSubmitted && (
//         <div className="form-screen">
//           <h2 className="title">Manage your assets like a pro</h2>
//           <p className="subtitle">List, manage, and track your rental items easily</p>

//           <form className="user-form" onSubmit={handleFormSubmit}>
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Phone Number" required />
//             <input type="password" placeholder="New Password" required />
//             <button type="submit">Proceed</button>
//           </form>
//         </div>
//       )}

//       {/* Step 3: Category Selection */}
//       {formSubmitted && !selectedCategory && (
//         <div className="item-listing-container">
//           <h2 className="item-heading">Let's Rent Smartly 🔍</h2>
//           <p className="item-subheading">Choose a category to upload your item</p>

//           <div className="category-grid">
//             {categories.map((cat, idx) => (
//               <div key={idx} className="category-card" onClick={() => handleCategoryClick(cat.name)}>
//                 <div className="category-icon">{cat.icon}</div>
//                 <div className="category-name">{cat.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Step 4: Upload Form */}
//       {selectedCategory && (
//         <div className="upload-container">
//           <form className="upload-form" onSubmit={handleUploadSubmit}>
//             <h3>Upload your {selectedCategory}</h3>
//             <input type="text" placeholder="Item Name" required />
//             <textarea placeholder="Description" rows="4" required />
//             <input type="number" placeholder="Price" required />
//             <input type="file" accept="image/*" required />
//             <button type="submit">Upload Item</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

//old


// import React, { useState } from "react";
// import "./UserProfile.css";

// const categories = [
//   { name: "Vehicles", icon: "🛵" },
//   { name: "Home Appliances", icon: "🏠" },
//   { name: "Gadgets & Electronics", icon: "🎮" },
//   { name: "Fashion & Clothing", icon: "👗" },
//   { name: "Books & Stationery", icon: "📚" },
//   { name: "Event Supplies", icon: "🎉" },
//   { name: "Tools & Equipment", icon: "🧰" },
//   { name: "Travel & Luggage", icon: "🧳" },
//   { name: "Furniture", icon: "🪑" },
//   { name: "Baby Products", icon: "🧒" }
// ];

// const UserProfile = () => {
//   const [userType, setUserType] = useState("");
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");

//   const handleSelect = (type) => setUserType(type);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//   };

//   const handleCategoryClick = (categoryName) => {
//     setSelectedCategory(categoryName);
//   };

//   const handleUploadSubmit = (e) => {
//     e.preventDefault();
//     alert("Item uploaded successfully!");
//     setSelectedCategory("");
//   };

//   return (
//     <div className="user-profile-container">
//       {/* Step 1: Role Selection */}
//       {!userType && (
//         <div className="selection-screen grid-center">
//           <h2 className="title">Choose Your Role</h2>
//           <div className="type-options-grid">
//             <div className="type-card" onClick={() => handleSelect("renter")}>
//               <i className="fas fa-user icon" />
//               <p>Renter</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("owner")}>
//               <i className="fas fa-home icon" />
//               <p>Owner</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("both")}>
//               <i className="fas fa-exchange-alt icon" />
//               <p>Both</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Step 2: Renter or Owner Form */}
//       {userType && !formSubmitted && (
//         <div className="form-screen centered-form">
//           <h2 className="title">
//             {userType === "renter"
//               ? "Find and rent your favorite items instantly"
//               : "Manage your assets like a pro"}
//           </h2>
//           <p className="subtitle">
//             {userType === "renter"
//               ? "Step into the world of effortless renting"
//               : "List, manage, and track your rental items easily"}
//           </p>

//           <form className="user-form" onSubmit={handleFormSubmit}>
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Phone Number" required />
//             <input type="password" placeholder="New Password" required />
//             <button type="submit">Proceed</button>
//           </form>
//         </div>
//       )}

//       {/* Step 3: Category Selection for Owners */}
//       {formSubmitted && !selectedCategory && userType !== "renter" && (
//         <div className="item-listing-container">
//           <h2 className="item-heading">Let's Rent Smartly 🔍</h2>
//           <p className="item-subheading">Choose a category to upload your item</p>

//           <div className="category-grid">
//             {categories.map((cat, idx) => (
//               <div
//                 key={idx}
//                 className="category-card"
//                 onClick={() => handleCategoryClick(cat.name)}
//               >
//                 <div className="category-icon">{cat.icon}</div>
//                 <div className="category-name">{cat.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Step 4: Upload Form */}
//       {selectedCategory && (
//         <div className="upload-container">
//           <form className="upload-form" onSubmit={handleUploadSubmit}>
//             <h3>Upload your {selectedCategory}</h3>
//             <input type="text" placeholder="Item Name" required />
//             <textarea placeholder="Description" rows="4" required />
//             <input type="number" placeholder="Price" required />
//             <input type="file" accept="image/*" multiple required />
//             <button type="submit">Upload Item</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;


//new

// import React, { useState } from "react";
// import "./UserProfile.css";

// const categories = [
//   { name: "Vehicles", icon: "🛵" },
//   { name: "Home Appliances", icon: "🏠" },
//   { name: "Gadgets & Electronics", icon: "🎮" },
//   { name: "Fashion & Clothing", icon: "👗" },
//   { name: "Books & Stationery", icon: "📚" },
//   { name: "Event Supplies", icon: "🎉" },
//   { name: "Tools & Equipment", icon: "🧰" },
//   { name: "Travel & Luggage", icon: "🧳" },
//   { name: "Furniture", icon: "🪑" },
//   { name: "Baby Products", icon: "🧒" }
// ];

// const UserProfile = () => {
//   const [userType, setUserType] = useState("");
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     images: [],
//   });
//   const [uploadedItems, setUploadedItems] = useState({});

//   const handleSelect = (type) => setUserType(type);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//   };

//   const handleCategoryClick = (categoryName) => {
//     setSelectedCategory(categoryName);
//   };

//   const handleUploadSubmit = (e) => {
//     e.preventDefault();

//     const newItem = {
//       name: formData.name,
//       description: formData.description,
//       price: formData.price,
//       images: Array.from(formData.images),
//     };

//     setUploadedItems((prev) => ({
//       ...prev,
//       [selectedCategory]: [...(prev[selectedCategory] || []), newItem],
//     }));

//     alert("Item uploaded successfully!");

//     setFormData({
//       name: "",
//       description: "",
//       price: "",
//       images: [],
//     });
//   };

//   return (
//     <div className="user-profile-container">
//       {/* Step 1: Role Selection */}
//       {!userType && (
//         <div className="selection-screen grid-center">
//           <h2 className="title">Choose Your Role</h2>
//           <div className="type-options-grid">
//             <div className="type-card" onClick={() => handleSelect("renter")}>
//               <i className="fas fa-user icon" />
//               <p>Renter</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("owner")}>
//               <i className="fas fa-home icon" />
//               <p>Owner</p>
//             </div>
//             <div className="type-card" onClick={() => handleSelect("both")}>
//               <i className="fas fa-exchange-alt icon" />
//               <p>Both</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Step 2: Renter or Owner Form */}
//       {userType && !formSubmitted && (
//         <div className="form-screen centered-form">
//           <h2 className="title">
//             {userType === "renter"
//               ? "Find and rent your favorite items instantly"
//               : "Manage your assets like a pro"}
//           </h2>
//           <p className="subtitle">
//             {userType === "renter"
//               ? "Step into the world of effortless renting"
//               : "List, manage, and track your rental items easily"}
//           </p>

//           <form className="user-form" onSubmit={handleFormSubmit}>
//             <input type="text" placeholder="Full Name" required />
//             <input type="email" placeholder="Email" required />
//             <input type="text" placeholder="Phone Number" required />
//             <input type="password" placeholder="New Password" required />
//             <button type="submit">Proceed</button>
//           </form>
//         </div>
//       )}

//       {/* Step 3: Category Selection for Owners */}
//       {formSubmitted && !selectedCategory && userType !== "renter" && (
//         <div className="item-listing-container">
//           <h2 className="item-heading">Let's Rent Smartly 🔍</h2>
//           <p className="item-subheading">Choose a category to upload your item</p>

//           <div className="category-grid">
//             {categories.map((cat, idx) => (
//               <div
//                 key={idx}
//                 className="category-card"
//                 onClick={() => handleCategoryClick(cat.name)}
//               >
//                 <div className="category-icon">{cat.icon}</div>
//                 <div className="category-name">{cat.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Step 4: Upload Form + Uploaded Items Preview */}
//       {selectedCategory && (
//         <div className="upload-container">
//           <form className="upload-form" onSubmit={handleUploadSubmit}>
//             <h3>Upload your {selectedCategory}</h3>

//             <input
//               type="text"
//               placeholder="Item Name"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               required
//             />

//             <textarea
//               placeholder="Description"
//               rows="4"
//               value={formData.description}
//               onChange={(e) =>
//                 setFormData({ ...formData, description: e.target.value })
//               }
//               required
//             />

//             <input
//               type="number"
//               placeholder="Price"
//               value={formData.price}
//               onChange={(e) =>
//                 setFormData({ ...formData, price: e.target.value })
//               }
//               required
//             />

//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               onChange={(e) =>
//                 setFormData({ ...formData, images: e.target.files })
//               }
//               required
//             />

//             <button type="submit">Upload Item</button>
//           </form>

//           {/* Show uploaded items under this category */}
//           {uploadedItems[selectedCategory] &&
//             uploadedItems[selectedCategory].length > 0 && (
//               <div className="uploaded-items-grid">
//                 <h4>Uploaded Items:</h4>
//                 <div className="items-grid">
//                   {uploadedItems[selectedCategory].map((item, index) => (
//                     <div key={index} className="item-card">
//                       <h5>{item.name}</h5>
//                       <p>{item.description}</p>
//                       <p><strong>₹{item.price}</strong></p>
//                       {item.images.length > 0 && (
//                         <img
//                           src={URL.createObjectURL(item.images[0])}
//                           alt="Uploaded Item"
//                           className="item-thumbnail"
//                         />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;


//newww

import React, { useState } from "react";
import "./UserProfile.css";

const categories = [
  { name: "Vehicles", icon: "🛵" },
  { name: "Home Appliances", icon: "🏠" },
  { name: "Gadgets & Electronics", icon: "🎮" },
  { name: "Fashion & Clothing", icon: "👗" },
  { name: "Books & Stationery", icon: "📚" },
  { name: "Event Supplies", icon: "🎉" },
  { name: "Tools & Equipment", icon: "🧰" },
  { name: "Travel & Luggage", icon: "🧳" },
  { name: "Furniture", icon: "🪑" },
  { name: "Baby Products", icon: "🧒" }
];

const UserProfile = () => {
  const [userType, setUserType] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");

  const handleSelect = (type) => setUserType(type);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    alert("Item uploaded successfully!");
    setSelectedCategory("");
  };

  const handleAadharVerify = () => {
    if (aadharNumber === "359822439524"||aadharNumber === "649209482921") {
      alert("✅ Aadhaar Verified Successfully!");
    } else {
      alert("❌ Invalid Aadhaar Number!");
    }
  };

  return (
    <div className="user-profile-container">
      {/* Step 1: Role Selection */}
      {!userType && (
        <div className="selection-screen grid-center">
          <h2 className="title">Choose Your Role</h2>
          <div className="type-options-grid">
            <div className="type-card" onClick={() => handleSelect("renter")}>
              <i className="fas fa-user icon" />
              <p>Renter</p>
            </div>
            <div className="type-card" onClick={() => handleSelect("owner")}>
              <i className="fas fa-home icon" />
              <p>Owner</p>
            </div>
            <div className="type-card" onClick={() => handleSelect("both")}>
              <i className="fas fa-exchange-alt icon" />
              <p>Both</p>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Renter or Owner Form */}
      {userType && !formSubmitted && (
        <div className="form-screen centered-form">
          <h2 className="title">
            {userType === "renter"
              ? "Find and rent your favorite items instantly"
              : "Manage your assets like a pro"}
          </h2>
          <p className="subtitle">
            {userType === "renter"
              ? "Step into the world of effortless renting"
              : "List, manage, and track your rental items easily"}
          </p>

          <form className="user-form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="password" placeholder="New Password" required />
            <input
              type="text"
              placeholder="Aadhaar Number"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              required
            />
            <button type="button" onClick={handleAadharVerify}>
              Verify Aadhaar
            </button>
            <button type="submit">Proceed</button>
          </form>
        </div>
      )}

      {/* Step 3: Category Selection for Owners */}
      {formSubmitted && !selectedCategory && userType !== "renter" && (
        <div className="item-listing-container">
          <h2 className="item-heading">Let's Rent Smartly 🔍</h2>
          <p className="item-subheading">
            Choose a category to upload your item
          </p>

          <div className="category-grid">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="category-card"
                onClick={() => handleCategoryClick(cat.name)}
              >
                <div className="category-icon">{cat.icon}</div>
                <div className="category-name">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Upload Form */}
      {selectedCategory && (
        <div className="upload-container">
          <form className="upload-form" onSubmit={handleUploadSubmit}>
            <h3>Upload your {selectedCategory}</h3>
            <input type="text" placeholder="Item Name" required />
            <textarea placeholder="Description" rows="4" required />
            <input type="number" placeholder="Price" required />
            <input type="file" accept="image/*" multiple required />
            <button type="submit">Upload Item</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
