const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const Listing = require("./models/listing.js");

const path = require("path");
//PUT,DELETE are not directely so use method-override package
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

//Database connect function calling here
dataBaseConnection()
  .then(() => {
    console.log("Database was connected successfully to database");
  })
  .catch((err) => {
    console.log(err);
  });

//Database connection function
async function dataBaseConnection() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

//Basic app testing for the app learning
app.get("/", (req, res) => {
  res.send("Hello would!!!");
});

//Index route all listing
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

//GET- /listings/new
//New Route
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

//GET- /listings/:id
//Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
});

//POST- /listings
//Create Route
app.post("/listings", async (req, res) => {
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

//GET- /listings/:id/edit
//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/edit.ejs", { listing });
});

//put- /listings/:id
//Update Route
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

//DELETE- /listings/:id
//Delete Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});

//This route will be testing of schema
// app.get("/testListingSchema", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My new villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute,Goa",
//     contry: "India",
//   });
//   await sampleListing.save();
//   console.log("Data was saved to the database thank you");
//   res.send("Data was saved to database so flag is success");
// });

const PORT = process.env.PORT || 3000;

//app listning
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
