const { getUser } = require("../services/auth");

async function userRestrictToLogIn(req, res, next) {
  const userLogIn = req.cookies.userToken;

  if (!userLogIn) {
    return res.redirect("/login/login");
  }

  const user = getUser(userLogIn);

  if (!user) return res.redirect("/login/login");

  req.user = user;

  next();
}

module.exports = {
  userRestrictToLogIn,
};
