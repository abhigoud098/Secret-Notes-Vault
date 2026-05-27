const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    note: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

const Notes = mongoose.model("notes", noteSchema);

module.exports = Notes;
