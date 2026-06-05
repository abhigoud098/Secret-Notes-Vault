const { handleHomePage } = require("../controller/notes");
const { userRestrictToLogIn } = require("../middleware/userAuth");
//This file we use for fix routes...

const express = require("express");

const router = express.Router();

//Render home page...
router.get("/", (req, res) => {
  return res.render("landingPage/landingPage");
});

//Handle logout route...
router.get("/login", (req, res) => {
  res.render("login/login");
});

//Handle signIn route...
router.get("/signin", (req, res) => {
  res.render("signin/signin");
});

//Handle after making note to render home page
router.get("/home", userRestrictToLogIn, handleHomePage);

module.exports = router;
