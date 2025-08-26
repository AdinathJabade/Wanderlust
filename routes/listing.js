const express = require("express");
const router = express.Router();
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");

const validateListing = (req, res, next) => {
  let { err } = listingSchema.validate(req.body);
  if (err) {
    throw new ExpressError(400, err);
  } else {
    next();
  }
};

//Index route all listing
router.get("/", async (req, res, next) => {
  try {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  } catch (err) {
    next(err);
  }
});

//GET- /listings/new
//New Route
router.get("/new", isLoggedIn, (req, res) => {
  res.render("./listings/new.ejs");
});

//GET- /listings/:id
//Show Route
router.get("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
  } catch (err) {
    next(err);
  }
});

//POST- /listings
//Create Route
router.post("/", validateListing,isLoggedIn, async (req, res, next) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
});

//GET- /listings/:id/edit
//Edit Route
router.get("/:id/edit",isLoggedIn, async (req, res, next) => {
  try {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("./listings/edit.ejs", { listing });
  } catch (err) {
    next(err);
  }
});

//put- /listings/:id
//Update Route
router.put("/:id", validateListing,isLoggedIn, async (req, res, next) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    next(err);
  }
});

//DELETE- /listings/:id
//Delete Route
router.delete("/:id",isLoggedIn, async (req, res, next) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listng Deleted!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
