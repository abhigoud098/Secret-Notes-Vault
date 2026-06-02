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
  return res.render("home/home", { allNotes });
}

async function userAllNotes() {
  const userNotes = await Notes.find();
  return userNotes;
}

async function deleteUserNote(req, res) {
  await Notes.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
}

module.exports = {
  handleNotesInfo,
  allNotes,
  deleteUserNote,
};
