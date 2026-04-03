const express = require("express");
const axios = require("axios");
const router = express.Router();
router.get("/search", async (req, res) => {
  try {
    const { q, min, max } = req.query;
    if (!q) return res.json([]);
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${q}`
    );
    let products = response.data.products;
    if (min) {
      products = products.filter(
        (p) => p.price >= parseFloat(min)
      );
    }
    if (max) {
      products = products.filter(
        (p) => p.price <= parseFloat(max)
      );
    }
    products.sort((a, b) => b.rating - a.rating);

    res.json(products);
  } catch (error) {
    console.error("Search error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
