const Notes = require("../model/notes");
let allNotes = [];

//Handle notes info
async function handleNotesInfo(req, res) {
  const { title, note } = req.body;

  if (title === "" || note === "")
    return res.send("Note is empty please fill title or note");

  await Notes.create({
    title,
    note,
  });
  allNotes = await userAllNotes();
  console.log({ user: req.user });

  return res.redirect("/home");
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
  const allNotes = await userAllNotes(); // -> This function give me updated notes...
  res.render("home/home", { allNotes, user: req.user });
}

//handle home page
async function handleHomePage(req, res) {

  return res.render("home/home", {
    user: req.user,
    allNotes,
  });
}

module.exports = {
  handleNotesInfo,
  deleteUserNote,
  giveNoteData,
  updateNote,
  allNotes,
  handleHomePage,
};
