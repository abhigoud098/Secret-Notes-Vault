const { handleHomePage } = require("../controller/notes");
const { restrictToCheckAuthorized } = require("../middleware/userAuth");
const {
  giveAllUsersForAdmin,
  giveAllNotesQuantity,
  giveAllAdmins,
  giveRecentUser,
} = require("../middleware/admin");

//This file we use for fix routes...
const express = require("express");
const { checkForAuthentication } = require("../middleware/userAuth");

const router = express.Router();

//Render home page...
router.get("/", (req, res) => {
  return res.render("landingPage/landingPage");
});

router.get(
  "/admin",
  giveAllUsersForAdmin,
  giveAllNotesQuantity,
  giveAllAdmins,
  giveRecentUser,
  (req, res) => {
    return res.render("admin/admin", {
      totalUsers: req.totalUsers,
      allNotes: req.allNotes,
      totalAdmins: req.totalAdmins,
    });
  },
);

//Handle logout route...
router.get("/login", (req, res) => {
  res.render("login/login");
});

//Handle signIn route...
router.get("/signin", (req, res) => {
  res.render("signin/signin");
});

//Handle after making note to render home page
router.get("/home", checkForAuthentication, handleHomePage);

module.exports = router;
