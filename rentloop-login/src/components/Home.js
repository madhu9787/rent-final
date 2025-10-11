
// import React from "react";
// import { useNavigate } from "react-router-dom"; 
// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate(); 

//   const scrollToSection = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="home-container">
//       <nav className="navbar">
//         <div className="logo">QUICK  NEIGHBOURHOOD  HOURLY  RENTAL  WEB APP</div>
//         <div className="nav-buttons">
//           <button onClick={() => scrollToSection("user")}>
//             User Module <i className="fas fa-user icon" />
//           </button>
//           <button onClick={() => scrollToSection("listing")}>
//             Item Listing <i className="fas fa-list icon" />
//           </button>
//           <button onClick={() => scrollToSection("search")}>
//             Search & Filter <i className="fas fa-search icon" />
//           </button>
//           <button onClick={() => scrollToSection("request")}>
//             Request & Approval <i className="fas fa-handshake icon" />
//           </button>
//           <button onClick={() => scrollToSection("calendar")}>
//             Calendar <i className="fas fa-calendar-alt icon" />
//           </button>
//           <button onClick={() => scrollToSection("ratings")}>
//             Ratings & Reviews <i className="fas fa-star icon" />
//           </button>
//           <button onClick={() => scrollToSection("support")}>
//             AI Support 24/7 <i className="fas fa-robot icon" />
//           </button>
//         </div>
//       </nav>

//       <section id="main" className="section main-section">
//         <h1 className="animated-title">Revolutionize the Way You Rent</h1>
//         <p className="subtext">A Smart Way to Rent and Earn</p>
//       </section>

//       <section
//         id="user"
//         className="section module-section"
//         onClick={() => navigate("/user-profile")}
//         style={{ cursor: "pointer" }}
//       >
//         User Module
//         <p className="section-desc">
//           <i className="fas fa-user-plus" /> Manage your profile and preferences easily
//         </p>
//       </section>

//       <section
//         id="listing"
//         className="section module-section"
//         onClick={() => navigate("/item-listing")} // <-- Added this line
//         style={{ cursor: "pointer" }}
//       >
//         Item Listing
//         <p className="section-desc">
//           <i className="fas fa-box-open" /> Add and showcase your rental items
//         </p>
//       </section>
//        <section
//        id="search"
//        className="section module-section"     
//         onClick={() => navigate("/search-filter")} // <-- Added this line
//         style={{ cursor: "pointer" }}
//       ></section>
//       <section id="search" className="section module-section">
//         Search & Filter
//         <p className="section-desc">
//           <i className="fas fa-search-location" /> Find the right item quickly with filters
//         </p>
//       </section>
     
//       <section
//        id="request"
//        className="section module-section"     
//         onClick={() => navigate("/request-approval")} // <-- Added this line
//         style={{ cursor: "pointer" }}
//       ></section>
//       <section id="request" className="section module-section">
//         Request & Approval
//         <p className="section-desc">
//           <i className="fas fa-paper-plane" /> Request items and get quick approvals
//         </p>
//       </section>
//       <section
//   id="calendar"
//   className="section module-section"
//   onClick={() => navigate("/calendar-availability")}
//   style={{ cursor: "pointer" }}
// ></section>
//       <section id="calendar" className="section module-section">
//         Calendar & Availability
//         <p className="section-desc">
//           <i className="fas fa-calendar-check" /> Track item availability in real-time
//         </p>
//       </section>

//      <section
//        id="ratings"
//        className="section module-section"     
//         onClick={() => navigate("/ratings-reviews")} // <-- Added this line
//         style={{ cursor: "pointer" }}
//       ></section>
//       <section id="ratings" className="section module-section">
//         Ratings & Reviews
//         <p className="section-desc">
//           <i className="fas fa-star-half-alt" /> Share feedback and check item quality
//         </p>
//       </section>

//       <section
//         id="support"
//         className="section module-section"
//         onClick={() => navigate("/chatbot")}
//         style={{ cursor: "pointer" }}
//       >
//         AI Support 24/7
//         <p className="section-desc">
//           <i className="fas fa-comments" /> Get instant answers and assistance anytime through our AI-powered chat support.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // <-- import Axios
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch modules dynamically from API
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get("/api/modules"); // <-- your backend endpoint
        setModules(response.data);
      } catch (error) {
        console.error("Error fetching modules:", error);
        // Fallback if API fails
        setModules([
          { id: "user", title: "User Module", desc: "Manage your profile and preferences easily", icon: "fa-user-plus", path: "/user-profile" },
          { id: "listing", title: "Item Listing", desc: "Add and showcase your rental items", icon: "fa-box-open", path: "/item-listing" },
          { id: "search", title: "Search & Filter", desc: "Find the right item quickly with filters", icon: "fa-search-location", path: "/search-filter" },
          { id: "request", title: "Request & Approval", desc: "Request items and get quick approvals", icon: "fa-paper-plane", path: "/request-approval" },
          { id: "calendar", title: "Calendar & Availability", desc: "Track item availability in real-time", icon: "fa-calendar-check", path: "/calendar-availability" },
          { id: "ratings", title: "Ratings & Reviews", desc: "Share feedback and check item quality", icon: "fa-star-half-alt", path: "/ratings-reviews" },
          { id: "support", title: "AI Support 24/7", desc: "Get instant answers and assistance anytime through our AI-powered chat support.", icon: "fa-comments", path: "/chatbot" },
        ]);
      }
    };

    fetchModules();
  }, []);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo" style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
  }}>QUICK  NEIGHBOURHOOD  HOURLY  RENTAL  WEB APP
          </div>
        
        <div className="nav-buttons">
          {modules.map((mod) => (
            <button key={mod.id} onClick={() => scrollToSection(mod.id)}>
              {mod.title} <i className={`fas ${mod.icon} icon`} />
            </button>
          ))}
        </div>
      </nav>

      <section id="main" className="section main-section">
        <h1 className="animated-title">Revolutionize the Way You Rent</h1>
        <p className="subtext">A Smart Way to Rent and Earn</p>
      </section>

      {modules.map((mod) => (
        <section
          key={mod.id}
          id={mod.id}
          className="section module-section"
          onClick={() => navigate(mod.path)}
          style={{ cursor: "pointer" }}
        >
          {mod.title}
          <p className="section-desc">
            <i className={`fas ${mod.icon}`} /> {mod.desc}
          </p>
        </section>
      ))}
    </div>
  );
};

export default Home;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://madhu:<db_password>@rent.yvrp6h0.mongodb.net/?retryWrites=true&w=majority&appName=rent";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
