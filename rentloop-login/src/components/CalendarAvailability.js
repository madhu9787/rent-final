import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarAvailability.css";

const products = [
  {
    name: "Honda Activa",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxlfwUJuqOr5v5vvMC3RmD0Ty7IqLUhLo9g&s",
  },
  {
    name: "Royal Enfield Classic",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KFzEp69g2bra1S3a1lB00P03nZGoqKyh_g&s",
  },
  {
    name: "Hyundai i20",
    image: "https://www.motoroids.com/wp-content/uploads/2014/03/New-2014-Honda-City-exterior-24.jpg",
  },
  {
    name: "Suzuki Access",
    image: "https://i.pinimg.com/1200x/7a/cf/6c/7acf6c38680888de6eb0ea18b8957344.jpg",
  },
  {
    name: "KTM Duke",
    image: "https://images.hindustantimes.com/auto/img/2025/02/14/600x338/2024_KTM_390_Duke_Review_4_1694926072249_1739511930304.jpg",
  },
];

const CalendarAvailability = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [availability, setAvailability] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setSelectedDate(null);
    setSelectedTime("");
    setAvailability(null);
    setShowModal(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setAvailability(null);
  };

  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    const isAvailable = Math.random() > 0.5;
    setAvailability(isAvailable);
  };

  const closeModal = () => {
    setShowModal(false);
    setAvailability(null);
  };

  return (
    <div className="calendar-container">
      <h2>🚗 Select a Product to Check Availability</h2>
      <div className="product-list">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <button onClick={() => handleProductClick(product)}>Check Availability</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <h3>{selectedProduct.name}</h3>
            <Calendar locale="en-US" onChange={handleDateChange} value={selectedDate} className="custom-calendar" />

            {selectedDate && (
              <div className="time-popup">
                <label>Select a Time:</label>
                <select value={selectedTime} onChange={handleTimeChange}>
                  <option value="">-- Choose Time --</option>
                  <option value="9AM">9:00 AM</option>
                  <option value="11AM">11:00 AM</option>
                  <option value="1PM">1:00 PM</option>
                  <option value="3PM">3:00 PM</option>
                  <option value="5PM">5:00 PM</option>
                </select>
              </div>
            )}

            {availability !== null && (
              <div className={`availability-result ${availability ? "available" : "not-available"}`}>
                {availability
                  ? "🎉 Yes, it's available! Go grab it now!"
                  : "❌ Oops! Not available at this time."}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarAvailability;

// new 




// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import axios from "axios";
// import "react-calendar/dist/Calendar.css";
// import "./CalendarAvailability.css";

// const products = [
//   {
//     name: "Honda Activa",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtxlfwUJuqOr5v5vvMC3RmD0Ty7IqLUhLo9g&s",
//     id: "activa01"
//   },
//   {
//     name: "Royal Enfield Classic",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KFzEp69g2bra1S3a1lB00P03nZGoqKyh_g&s",
//     id: "re02"
//   },
//   {
//     name: "Hyundai i20",
//     image: "https://www.motoroids.com/wp-content/uploads/2014/03/New-2014-Honda-City-exterior-24.jpg",
//     id: "i203"
//   },
//   {
//     name: "Suzuki Access",
//     image: "https://i.pinimg.com/1200x/7a/cf/6c/7acf6c38680888de6eb0ea18b8957344.jpg",
//     id: "suzuki04"
//   },
//   {
//     name: "KTM Duke",
//     image: "https://images.hindustantimes.com/auto/img/2025/02/14/600x338/2024_KTM_390_Duke_Review_4_1694926072249_1739511930304.jpg",
//     id: "ktm05"
//   },
// ];

// const baseURL = process.env.REACT_APP_API_URL;

// const CalendarAvailability = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState("");
//   const [availability, setAvailability] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setSelectedDate(null);
//     setSelectedTime("");
//     setAvailability(null);
//     setShowModal(true);
//   };

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     setAvailability(null);
//   };

//   const handleTimeChange = async (e) => {
//     const time = e.target.value;
//     setSelectedTime(time);

//     if (!selectedProduct || !selectedDate || !time) return;

//     try {
//       const res = await axios.post(`${baseURL}/api/items/check-availability`, {
//         itemId: selectedProduct.id,
//         date: selectedDate,
//         time: time
//       });

//       setAvailability(res.data.available);
//     } catch (error) {
//       console.error("Error checking availability:", error);
//       setAvailability(false);
//     }
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setAvailability(null);
//   };

//   return (
//     <div className="calendar-container">
//       <h2>🚗 Select a Product to Check Availability</h2>
//       <div className="product-list">
//         {products.map((product, idx) => (
//           <div key={idx} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <button onClick={() => handleProductClick(product)}>Check Availability</button>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={closeModal}>×</span>
//             <h3>{selectedProduct.name}</h3>
//             <Calendar locale="en-US" onChange={handleDateChange} value={selectedDate} className="custom-calendar" />

//             {selectedDate && (
//               <div className="time-popup">
//                 <label>Select a Time:</label>
//                 <select value={selectedTime} onChange={handleTimeChange}>
//                   <option value="">-- Choose Time --</option>
//                   <option value="9AM">9:00 AM</option>
//                   <option value="11AM">11:00 AM</option>
//                   <option value="1PM">1:00 PM</option>
//                   <option value="3PM">3:00 PM</option>
//                   <option value="5PM">5:00 PM</option>
//                 </select>
//               </div>
//             )}

//             {availability !== null && (
//               <div className={`availability-result ${availability ? "available" : "not-available"}`}>
//                 {availability
//                   ? "🎉 Yes, it's available! Go grab it now!"
//                   : "❌ Oops! Not available at this time."}
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CalendarAvailability;


//back

   