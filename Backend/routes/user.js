const express = require("express");
const { handleLoginUser, handleSigninUser } = require("../controller/user");
const router = express.Router();

router.post("/", handleSigninUser);
router.post("/login", handleLoginUser);

module.exports = router;
