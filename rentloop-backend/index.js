
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const itemRoute = require("./routes/items");
const rentalRequestRoute = require("./routes/rentalRequests");
const chatbotRoute = require("./routes/chatbot");
const availabilityRoute = require("./routes/availability");
const reviewRoute = require("./routes/reviews");
const paymentRoute = require("./routes/payments");

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/items", itemRoute);
app.use("/api/rental-requests", rentalRequestRoute);
app.use("/api/chatbot", chatbotRoute);
app.use("/api/availability", availabilityRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/payments", paymentRoute);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
