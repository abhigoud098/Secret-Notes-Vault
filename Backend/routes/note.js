const express = require("express");
const router = express.Router();
const { handleNotesInfo, deleteUserNote } = require("../controller/notes");

router.post("/", handleNotesInfo);
router.delete("/delete/:id", deleteUserNote);

module.exports = router;
