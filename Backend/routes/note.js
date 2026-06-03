const express = require("express");
const router = express.Router();
const {
  handleNotesInfo,
  deleteUserNote,
  giveNoteData,
  updateNote,
} = require("../controller/notes");

router.post("/", handleNotesInfo);
router.delete("/delete/:id", deleteUserNote);
router.get("/edit/:id", giveNoteData);
router.post("/update/:id", updateNote);

module.exports = router;
