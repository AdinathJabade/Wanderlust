const express = require("express");
const app = express();
const mongoose = require("mongoose");
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const path = require("path");
//PUT,DELETE are not directely so use method-override package
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

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

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", function (e) {
  console.log("Store error", e);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser", async (req, res) => {
//   let fakeUser = new User({
//     email: "adi@gmail.com",
//     username: "Adi_Jabade",
//   });
//   let registeredUser=await User.register(fakeUser, "12345a");
//   res.send(registeredUser);
// });

// Landing page route
app.get("/", (req, res) => {
  res.render("landing", { currUser: req.user, hideSearch: true });
});

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

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
