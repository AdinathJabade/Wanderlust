const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const validateListing = (req, res, next) => {
  let { err } = listingSchema.validate(req.body);
  if (err) {
    throw new ExpressError(400, err);
  } else {
    next();
  }
};

//Index route all listing
router.get("/", listingController.index);

//GET- /listings/new
//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//GET- /listings/:id
//Show Route
router.get("/:id", listingController.showListings);

//POST- /listings
//Create Route
router.post(
  "/",
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  listingController.createListing
);

//GET- /listings/:id/edit
//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, listingController.editListing);

//put- /listings/:id
//Update Route
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  listingController.updateListing
);

//DELETE- /listings/:id
//Delete Route
router.delete("/:id", isLoggedIn, isOwner, listingController.destroyListing);

module.exports = router;
