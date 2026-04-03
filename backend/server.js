const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.listen(5001, () => {
  console.log("🚀 Backend running on http://localhost:5001");
});
