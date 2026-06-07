const User = require("../model/user");
const { setUser } = require("../services/auth");
const { allNotesCreateByNormalUser } = require("./notes");
//Handle Signin...
async function handleSigninUser(req, res) {
  const { first_name, last_name, email, role, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.send("User already exists");
  }

  await User.create({
    first_name,
    last_name,
    email,
    role,
    password,
  });

  return res.render("login/login");
}

//Handle login...
async function handleLoginUser(req, res) {
  const { email, role, password } = req.body;

  // console.log("BODY:", req.body);

  const user = await User.findOne({
    email,
    role,
    password,
  });

  // console.log("USER:", user);

  if (user) {
    const token = setUser(user);
    res.cookie("userToken", token);
    return res.render("home/home", { allNotesCreateByNormalUser, user });
  }

  return res.send(
    "Password or email is not correct or if you not Signin please Signin",
  );
}

module.exports = {
  handleLoginUser,
  handleSigninUser,
};
