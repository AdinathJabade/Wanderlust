const Listing = require("../models/listing");
module.exports.index = async (req, res, next) => {
  try {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
  } catch (err) {
    next(err);
  }
};

module.exports.renderNewForm = (req, res) => {
  res.render("./listings/new.ejs");
};
module.exports.showListings = async (req, res, next) => {
  try {
    let { id } = req.params;
    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }
    res.render("./listings/show.ejs", { listing });
  } catch (err) {
    next(err);
  }
};

module.exports.createListing = async (req, res, next) => {
  try {
    const geocoder = require('../utils/geocoder');
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    // Geocode location
    const geoRes = await geocoder.geocode(newListing.location);
    if (geoRes && geoRes.length > 0) {
      newListing.latitude = geoRes[0].latitude;
      newListing.longitude = geoRes[0].longitude;
    }
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};
module.exports.editListing = async (req, res, next) => {
  try {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist!");
      return res.redirect("/listings");
    }


    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/w_250");
    res.render("./listings/edit.ejs", { listing,originalImageUrl });
  } catch (err) {
    next(err);
  }
};
module.exports.updateListing = async (req, res, next) => {
  try {
    const geocoder = require('../utils/geocoder');
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });

    // Geocode location if changed
    if (req.body.listing.location) {
      const geoRes = await geocoder.geocode(req.body.listing.location);
      if (geoRes && geoRes.length > 0) {
        listing.latitude = geoRes[0].latitude;
        listing.longitude = geoRes[0].longitude;
        await listing.save();
      }
    }

    if (typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image = { url, filename };
      await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    next(err);
  }
};
module.exports.destroyListing = async (req, res, next) => {
  try {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listng Deleted!");
    res.redirect("/listings");
  } catch (err) {
    next(err);
  }
};
