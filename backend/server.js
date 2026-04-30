require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

//connect database
connectDB();
// routes
const tradeRoutes = require("./routes/trades");
app.use("/api/trades", tradeRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
// app.get("/", (req, res) => {
//   res.send("Trading Journal API running 🚀");
// });

// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



