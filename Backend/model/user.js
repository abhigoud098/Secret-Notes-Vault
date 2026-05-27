const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }, //This thing auto matic added in mongoose createdAT or updatedAt time it help farther...
);

const User = mongoose.model("user", userSchema);

module.exports = User;
