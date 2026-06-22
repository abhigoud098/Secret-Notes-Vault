const { default: mongoose } = require("mongoose");
const Notes = require("../model/notes");
let allNotesCreateByNormalUser = [];

//Handle notes info
async function handleNotesInfo(req, res) {
  const { title, note } = req.body;

  if (title === "" || note === "")
    return res.send("Please fill note title or note...");

  await Notes.create({
    title,
    note,
    createdBy: req.user._id,
  });

  await userAllNotes(req.user._id);

  return res.redirect("/home");
}

//Give all notes a created by normal user present in DB
async function userAllNotes(_id) {
  const normalUserAllNotes = await Notes.find({
    createdBy: _id,
  });

  allNotesCreateByNormalUser = normalUserAllNotes;
}

//Delete notes in DB
async function deleteUserNote(req, res) {
  await Notes.findByIdAndDelete(req.params.id);
  await userAllNotes(req.user._id);
  res.sendStatus(200);
}

//Get notes Data for update by user notes
async function giveNoteData(req, res) {
  const noteData = await Notes.findById(req.params.id);
  res.json(noteData);
}

//Update note in db update notes by user
async function updateNote(req, res) {
  const id = req.params.id;
  const { title, note } = req.body;

  //Update in db
  await Notes.findByIdAndUpdate(id, {
    title,
    note,
  });

  await userAllNotes(req.user._id); // -> This function give me updated notes...

  res.render("home/home", { allNotesCreateByNormalUser, user: req.user });
}

//handle home page
function handleHomePage(req, res) {
  return res.render("home/home", {
    user: req.user,
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
  userAllNotes,
};
