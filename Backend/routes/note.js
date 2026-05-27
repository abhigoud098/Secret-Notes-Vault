const express = require("express");
const router = express.Router();
const {handleNotesInfo} = require("../controller/notes");

router.post("/", handleNotesInfo);

module.exports = router;