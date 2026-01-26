const axios = require("axios");

// ChatGPT-style ranked search
exports.searchProducts = async (req, res) => {
  try {
    const query = req.query.q;

    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );

    const rankedProducts = response.data.products
      .map(p => ({
        id: p.id,
        name: p.title,
        price: p.price,
        rating: p.rating,
        image: p.thumbnail,
        description: p.description,
        score: p.rating * 0.7 + p.stock * 0.3
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    res.json(rankedProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Default top recommendations
exports.topProducts = async (req, res) => {
  const response = await axios.get("https://dummyjson.com/products");
  res.json(response.data.products.slice(0, 5));
};
