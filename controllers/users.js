const User = require("../models/user");
module.exports.renderSignupForm = (req, res) => {
  res.render("./users/signup.ejs");
};
module.exports.submitSignupForm = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Tripster!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};
module.exports.renderLoginForm = (req, res) => {
  res.render("./users/login.ejs");
};
module.exports.submitLoginForm = async (req, res) => {
  req.flash("success", "welcome back to the Tripster!");
  res.redirect(res.locals.redirectUrl || "/listings");
};
module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
  });
};
