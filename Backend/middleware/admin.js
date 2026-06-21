const User = require("../model/user");
const Notes = require("../model/notes");

//give all users for admin
async function giveAllUsersForAdmin(req, res, next) {
  const allUsers = await User.find();
  req.totalUsers = allUsers.length;

  return next();
}

//give totalNotes creates by all users
async function giveAllNotesQuantity(req, res, next) {
  const allNotes = await Notes.countDocuments();
  req.allNotes = allNotes;

  return next();
}

//give all admins in our app
async function giveAllAdmins(req, res, next) {
  const allUsers = await User.find();

  let totalAdmins = 0;
  allUsers.map((user) => {
    if (user.role === "admin") {
      totalAdmins++;
    }
  });

  req.totalAdmins = totalAdmins;

  return next();
}

async function giveRecentUser(req, res, next) {
  const allUsers = await User.find();

  const onlineUser = allUsers.map((user) => {
    if (user.isOnline) {
      return user;
    }
  });

  console.log(onlineUser);

  req.onlineUser = onlineUser;

  return next();
}

module.exports = {
  giveAllUsersForAdmin,
  giveAllNotesQuantity,
  giveAllAdmins,
  giveRecentUser,
};
