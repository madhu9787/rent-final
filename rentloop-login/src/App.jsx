
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CategoryItems from "./components/CategoryItems"; // <-- import


// import Login from "./components/Login";
// import Home from "./components/Home";
// import UserProfile from "./components/UserProfile";
// import ChatBot from "./components/ChatBot";       // ✅ ChatBot imported
// import ItemListing from "./components/ItemListing"; // ✅ ItemListing imported

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/user-profile" element={<UserProfile />} />
//         <Route path="/chatbot" element={<ChatBot />} />
//         <Route path="/item-listing" element={<ItemListing />} /> {/* ✅ ItemListing route added */}
//         <Route path="/category-items" element={<CategoryItems />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import UserProfile from "./components/UserProfile";
// import ChatBot from "./components/ChatBot";
// import ItemListing from "./components/ItemListing";
// import CategoryItems from "./components/CategoryItems";
// import CategoryHomeAppliances from "./components/CategoryHomeAppliances"; // ✅ This line fixes the error
// import CategoryGadgetsElectronics from "./components/CategoryGadgetsElectronics"; // ✅ Import the component


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/user-profile" element={<UserProfile />} />
//         <Route path="/chatbot" element={<ChatBot />} />
//         <Route path="/item-listing" element={<ItemListing />} />
//         <Route path="/category-items" element={<CategoryItems />} />
//         <Route path="/home-appliances" element={<CategoryHomeAppliances />} /> {/* ✅ Correct name used */}
//         <Route path="/gadgets-electronics" element={<CategoryGadgetsElectronics />} /> {/* ✅ Add this route */}

//       </Routes>
//     </BrowserRouter>
//   );
// }

//export default App;

//new



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Home from "./components/Home";
// import UserProfile from "./components/UserProfile";
// import ChatBot from "./components/ChatBot";
// import ItemListing from "./components/ItemListing";
// import CategoryHomeAppliances from "./components/CategoryHomeAppliances";
// import CategoryFashionClothing from "./components/CategoryFashionClothing"; // ✅ NEW
// import CategoryItems from "./components/CategoryItems";
// import CategoryGadgetsElectronics from "./components/CategoryGadgetsElectronics"; 
// import CategoryBooksStationery from "./components/CategoryBooksStationery";

// import CategoryEventSuppliers from "./components/CategoryEventSuppliers"; // ✅ Import

// import CategoryToolsEquipment from "./components/CategoryToolsEquipment"; // ✅ Import at top

// // Inside <Routes>
// import CategoryTravelLuggage from "./components/CategoryTravelLuggage"; // ✅ Add this at top

// // Inside <Routes> tag:

// import CategoryFurniture from "./components/CategoryFurniture"; // ✅ at the top

// // Inside your <Routes>

// import CategoryBabyProducts from "./components/CategoryBabyProducts"; // ✅ Add at top

// // Inside <Routes>


// import SearchAndFilter from "./components/SearchAndFilter"; // ✅ Add this

// // Inside <Routes>
// import CalendarAvailability from "./components/CalendarAvailability"; // ✅ NEW
// import PaymentPage from "./components/PaymentPage"; // At top
// import RatingsReviews from "./components/RatingsReviews";

//  // Inside <Routes>
// import RequestApproval from "./components/RequestApproval";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/user-profile" element={<UserProfile />} />
//         <Route path="/chatbot" element={<ChatBot />} />
//         <Route path="/item-listing" element={<ItemListing />} />
//         <Route path="/category-items" element={<CategoryItems />} />
//         <Route path="/home-appliances" element={<CategoryHomeAppliances />} />
//         <Route path="/gadgets-electronics" element={<CategoryGadgetsElectronics />}/>
//         <Route path="/fashion-clothing" element={<CategoryFashionClothing />} /> 
//         <Route path="/books-stationery" element={<CategoryBooksStationery />} />
       
//         <Route path="/event-supplies" element={<CategoryEventSuppliers />} />
//         <Route path="/tools-equipment" element={<CategoryToolsEquipment />} />
//         <Route path="/travel-luggage" element={<CategoryTravelLuggage />} />
//         <Route path="/furniture" element={<CategoryFurniture />} />
//         <Route path="/baby-products" element={<CategoryBabyProducts />} />
//         <Route path="/search-filter" element={<SearchAndFilter />} />
//         <Route path="/calendar-availability" element={<CalendarAvailability />} />
// <Route path="/payment" element={<PaymentPage />} />
// <Route path="/ratings-reviews" element={<RatingsReviews />} />
// <Route path="/request-approval" element={<RequestApproval />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages / Components
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import ChatBot from "./components/ChatBot";
import ItemListing from "./components/ItemListing";
import SearchAndFilter from "./components/SearchAndFilter";
import CalendarAvailability from "./components/CalendarAvailability";
import PaymentPage from "./components/PaymentPage";
import RatingsReviews from "./components/RatingsReviews";
import RequestApproval from "./components/RequestApproval";

// Category Components
import CategoryItems from "./components/CategoryItems";
import CategoryHomeAppliances from "./components/CategoryHomeAppliances";
import CategoryFashionClothing from "./components/CategoryFashionClothing";
import CategoryGadgetsElectronics from "./components/CategoryGadgetsElectronics";
import CategoryBooksStationery from "./components/CategoryBooksStationery";
import CategoryEventSuppliers from "./components/CategoryEventSuppliers";
import CategoryToolsEquipment from "./components/CategoryToolsEquipment";
import CategoryTravelLuggage from "./components/CategoryTravelLuggage";
import CategoryFurniture from "./components/CategoryFurniture";
import CategoryBabyProducts from "./components/CategoryBabyProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        
        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/item-listing" element={<ItemListing />} />
        <Route path="/search-filter" element={<SearchAndFilter />} />
        <Route path="/calendar-availability" element={<CalendarAvailability />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/ratings-reviews" element={<RatingsReviews />} />
        <Route path="/request-approval" element={<RequestApproval />} />

        {/* Categories */}
        <Route path="/category-items" element={<CategoryItems />} />
        <Route path="/home-appliances" element={<CategoryHomeAppliances />} />
        <Route path="/gadgets-electronics" element={<CategoryGadgetsElectronics />} />
        <Route path="/fashion-clothing" element={<CategoryFashionClothing />} />
        <Route path="/books-stationery" element={<CategoryBooksStationery />} />
        <Route path="/event-supplies" element={<CategoryEventSuppliers />} />
        <Route path="/tools-equipment" element={<CategoryToolsEquipment />} />
        <Route path="/travel-luggage" element={<CategoryTravelLuggage />} />
        <Route path="/furniture" element={<CategoryFurniture />} />
        <Route path="/baby-products" element={<CategoryBabyProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
