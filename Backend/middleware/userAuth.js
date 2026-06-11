const { getUser } = require("../services/auth");
const { userAllNotes } = require("../controller/notes");

// async function userRestrictToLogIn(req, res, next) {  //Authentication only for valid "Browser User" so we use another way for Auth...
//   const userLogIn = req.cookies.userToken;

//   if (!userLogIn) {
//     return res.redirect("/login/login");
//   }

//   const user = getUser(userLogIn);

//   if (!user) return res.redirect("/login/login");

//   req.user = user;

//   next();
// }

// //This why we Authenticate any device not only in browser;
// async function userRestrictToLogIn(req, res, next) {
//   // Authorization : Bearer <JWT Token> <-- this Authorization property in header inbuilt for sending a token to server.
//   const userUid = req.headers["Authorization"]; //Why we write like ["Authorization"] --> because of this property is in variable like variable name is Auth = "Authorization";
//   console.log(userUid);
//   //UserUid --> we have "Token"
//   if (!userUid) return res.redirect("/login");
//   const token = userUid.split("Bearer ")[1]; // "Bearer [token]" something like this what we want to access
//   console.log(token);
//   user = getUser(token);

//   req.user = user;

//   next(); //this will after run next() then it call next middleware
// }

function checkForAuthentication(req, res, next) {
  const tokenCookies = req.cookies?.token;

  req.user = null; // with thi line app is not going to crash

  if (!tokenCookies) return next();

  const token = tokenCookies;
  const user = getUser(token);

  req.user = user;
  return next();
}

//Authorization code
function restrictToCheckAuthorized(role = []) {
  return async function (req, res, next) {
    if (!req.user) return res.redirect("/login");

    if (!role.includes(req.user.role)) return res.end("UnAuthorized");

    if (req.user.role === "normal") {
      await userAllNotes(req.user._id);
    }

    return next(); //Next middle where call immediately
  };
}

module.exports = {
  checkForAuthentication,
  restrictToCheckAuthorized,
};
