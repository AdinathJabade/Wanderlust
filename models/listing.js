const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  image: {
    type: String,
    default: "default image link",
    set: (v) => (v === "" ? "if empty so image link here" : v),
  },
  price: Number,
  location: String,
  contry: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
