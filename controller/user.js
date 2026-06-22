const User = require("../model/user");
const { setUser } = require("../services/auth");

//Handle Signin...
async function handleSigninUser(req, res) {
  const { first_name, last_name, email, role, password } = req.body;

  if (
    first_name === "" ||
    last_name === "" ||
    email === "" ||
    role === "" ||
    password === ""
  )
    return res.send("Every field is require fill every information");

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

  if (email === "" || role === "" || password === "")
    return res.send("Fill every field is require...");

  // console.log("BODY:", req.body);

  const user = await User.findOne({
    email,
    role,
    password,
  });

  // console.log("USER:", user);

  if (user) {
    const token = setUser(user);
    res.cookie("token", token);
    if (user.role === "normal") {
      return res.redirect("/home");
    }

    if (user.role === "admin") {
      return res.redirect("/admin");
    }
  }

  return res.send(
    "Password or email is not correct or if you not Signin please Signin",
  );
}

module.exports = {
  handleLoginUser,
  handleSigninUser,
};
