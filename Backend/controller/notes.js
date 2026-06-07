const Notes = require("../model/notes");
const {user} = require("../middleware/userAuth")
let allNotesCreateByNormalUser = [];

//Handle notes info
async function handleNotesInfo(req, res) {
  const { title, note } = req.body;

  if (title === "" || note === "")
    return res.send("Note is empty please fill title or note");

  await Notes.create({
    title,
    note,
  });

  return res.redirect("/home");
}

//Give all notes a created by normal user present in DB
async function userAllNotes(id) {
  const normalUserAllNotes = await Notes.find({
    createdBy: id,
  });
  return normalUserAllNotes;
}

//Delete notes in DB
async function deleteUserNote(req, res) {
  await Notes.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
}

//Get notes Data
async function giveNoteData(req, res) {
  const noteData = await Notes.findById(req.params.id);
  res.json(noteData);
}

//Update note in db
async function updateNote(req, res) {
  const id = req.params.id;
  const { title, note } = req.body;

  await Notes.findByIdAndUpdate(id, { title, note });
  allNotesCreateByNormalUser = await userAllNotes(id); // -> This function give me updated notes...
  res.render("home/home", { allNotesCreateByNormalUser, user: req.user });
}

//handle home page
async function handleHomePage(req, res) {
  return res.render("home/home", {
    user,
    allNotesCreateByNormalUser,
  });
}

module.exports = {
  handleNotesInfo,
  deleteUserNote,
  giveNoteData,
  updateNote,
  allNotesCreateByNormalUser,
  handleHomePage,
};
