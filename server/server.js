const express = require("express");
const mongoose = require("mongoose");
const vehicleRoutes = require("./routes/vehicleRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// CORS Middleware
const allowedOrigins = [
  "http://localhost:3000", // for local dev
  "https://mda-shipping-tau.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Body Parser
app.use(express.json());

// Vehicle Routes
app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to our Shipping Vehicle API!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.error(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
