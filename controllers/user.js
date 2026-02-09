const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
}
module.exports.signUpUser =async (req, res,next) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({
      email: email,
      username: username,
    });
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser,(err)=>{
      if(err){
        return next(err);
      }
    req.flash("success", "Registered Successfully!");
    res.redirect("/listing");
    })
 
  } catch (err) {
    req.flash("error", err.message);   
    res.redirect("/signup");
  }
}
module.exports.renderloginForm = (req, res) => {
  res.render("users/login.ejs");
}
module.exports.loginUser =(req, res) => {
    req.flash("success", "You are logged in, Welcome back!");
    let redirectUrl = res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
  }
  module.exports.logOutUser=(req,res,next)=>{
  req.logout((err)=>{
    if(err){
     return next(err);
    }
    req.flash("success","Successfully logged out.")
    res.redirect("/listing");
  })
}   