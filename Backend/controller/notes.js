const Notes = require("../model/notes");

//Handle notes info
async function handleNotesInfo(req, res) {
  const { title, note } = req.body;

  await Notes.create({
    title,
    note,
  });

  return res.send("Notes is create successfully");
}

module.exports = {
  handleNotesInfo,
};
