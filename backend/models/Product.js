const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
  rating: Number,
  reviewsCount: Number,
  description: String,
  popularity: Number
});

module.exports = mongoose.model("Product", productSchema);
