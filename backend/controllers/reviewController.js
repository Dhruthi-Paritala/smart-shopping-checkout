const Review = require("../models/Review");
exports.getReviews = async (req, res) => {
  const reviews = await Review.find({
    productId: req.params.productId
  });
  res.json(reviews);
};
exports.addReview = async (req, res) => {
  const { username, rating, comment } = req.body;
  const review = new Review({
    productId: req.params.productId,
    username,
    rating,
    comment
  });
  await review.save();
  res.status(201).json(review);
};
