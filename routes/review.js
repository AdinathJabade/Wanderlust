const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isReviewOwner } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

const validateLReview = (req, res, next) => {
  let { err } = reviewSchema.validate(req.body);
  if (err) {
    throw new ExpressError(400, err);
  } else {
    next();
  }
};

//Rating
//post route
router.post("/", isLoggedIn, validateLReview, reviewController.createReview);

//Delete Review Route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewOwner,
  reviewController.deleteReview
);

module.exports = router;
