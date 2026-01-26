const Review = require("../models/Review");

// Get reviews
exports.getReviews = async (req, res) => {
  const reviews = await Review.find({
    productId: req.params.productId
  });
  res.json(reviews);
};

// Add review
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
