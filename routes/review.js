const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js")
const reviewController = require("../controllers/review.js");

// post reviews
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));
// delete review
router.delete("/:reviewId",isAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;
