const Notes = require("../model/notes");

//Handle notes info
let allNotes = [];
async function handleNotesInfo(req, res) {
  const { title, note } = req.body;

  if (title === "" || note === "")
    return res.send("Note is empty please fill title or note");

  await Notes.create({
    title,
    note,
  });
  allNotes = await userAllNotes();
  return res.render("home/home", { allNotes, user: req.user });
}

//Give all notes which ia present in DB
async function userAllNotes() {
  const userNotes = await Notes.find();
  return userNotes;
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
  allNotes = await userAllNotes();
  res.render("home/home", { allNotes, user: req.user });
}

module.exports = {
  handleNotesInfo,
  allNotes,
  deleteUserNote,
  giveNoteData,
  updateNote,
};
