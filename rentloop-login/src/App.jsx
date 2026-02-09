import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import ChatBot from "./components/ChatBot";
import ItemListing from "./components/ItemListing";
import SearchAndFilter from "./components/SearchAndFilter";
import DiscoverItems from "./components/DiscoverItems";
import MyListings from "./components/MyListings";
import Favorites from "./components/Favorites";
import RentalRequests from "./components/RentalRequests";
import CalendarAvailability from "./components/CalendarAvailability";
import PaymentPage from "./components/PaymentPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FloatingChatBot from "./components/FloatingChatBot";
import Footer from "./components/Footer";


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
        <Route path="/discover-items" element={<DiscoverItems />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/rental-requests" element={<RentalRequests />} />
        <Route path="/calendar-availability" element={<CalendarAvailability />} />
        <Route path="/payment" element={<PaymentPage />} />

        {/* Info Pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      {/* ✅ Floating ChatBot - Available on ALL pages */}
      <FloatingChatBot />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
