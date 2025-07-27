const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data.js");

//database url
const MONGO_URI = "mongodb://localhost:27017/wanderlust";

//database connect function calling here
dataBaseConnection()
  .then(() => {
    console.log("Database was connected successfully to database");
  })
  .catch((err) => {
    console.log(err);
  });

//database connection function
async function dataBaseConnection() {
  await mongoose.connect(MONGO_URI);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();
