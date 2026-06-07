const jwt = require("jsonwebtoken");
const secret = "Snapcode@09";

function setUser(user) {
  const payload = {
    first_name: user.first_name,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, secret); // this function make token for user
}

function getUser(token) {
  try {
    return jwt.verify(token, secret); // Verify token
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
