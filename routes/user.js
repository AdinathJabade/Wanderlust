const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router.get("/signup", userController.renderSignupForm);

router.post("/signup", userController.submitSignupForm);

router.get("/login", userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  Passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.submitLoginForm
);

router.get("/logout", userController.logoutUser);

module.exports = router;
