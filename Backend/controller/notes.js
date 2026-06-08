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
  });

  return res.redirect("/home");
}

//Give all notes a created by normal user present in DB
async function userAllNotes() {
  const normalUserAllNotes = await Notes.find({
    createdBy: req.user._id,
  });
  console.log(normalUserAllNotes);
  return normalUserAllNotes;
}

//Delete notes in DB
async function deleteUserNote(req, res) {
  await Notes.findByIdAndDelete(req.params.id);
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

  await Notes.findByIdAndUpdate(id, { title, note });
  allNotesCreateByNormalUser = await userAllNotes(); // -> This function give me updated notes...
  res.render("home/home", { allNotesCreateByNormalUser, user });
}

//handle home page
async function handleHomePage(req, res) {
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
};
