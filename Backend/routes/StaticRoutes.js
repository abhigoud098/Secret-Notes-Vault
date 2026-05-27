//This file we use for fix routes...

const express = require("express");

const router = express.Router();

//Render home page...
router.get("/", (req, res) => {
  return res.send("Welcome of Private Vault");
});

//Handle logout rout 
router.get("/login", (req, res) => {
   res.render("login/login");
});

module.exports = router;
