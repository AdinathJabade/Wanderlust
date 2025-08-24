const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
//PUT,DELETE are not directely so use method-override package
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

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
app.use(express.static(path.join(__dirname, "/public")));

//Basic app testing for the app learning
app.get("/", (req, res) => {
  res.send("Hello would!!!");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

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
// app.all("*",(req,res,next)=>{
//   next(new ExpressError(404,"page not found"));
// });

app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong!" } = err;
  res.render("error.ejs", { message });
});

const PORT = process.env.PORT || 3000;

//app listning
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
