//Requirements all handle here...
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { connectToMongoDB } = require("./connect");
const staticRoutes = require("./routes/StaticRoutes");
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser");
const noteRoute = require("./routes/note");
const {
  checkForAuthentication,
  restrictToCheckAuthorized,
} = require("./middleware/userAuth");

//MongoDb connection...
connectToMongoDB("mongodb://127.0.0.1:27017/private_notes").then(() => {
  console.log("Mongoose is connected");
});

const app = express();

//Middleware...
app.use(express.urlencoded({ extended: false })); //For read params data
app.use(express.json()); //Read json data
app.use(cookieParser()); //For read cookies

//Tell the server which technology i want to use for server side rend ring...
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "public"))); // Use for run public folder files it access able for browser....

//Routes...
app.use("/", staticRoutes); //For showing the pages
app.use("/user", userRoute); //For user route handle user related work
app.use(
  "/note",
  checkForAuthentication,
  restrictToCheckAuthorized(["normal"]),
  noteRoute,
); //Notes related work

//Listening on port 8000...
app.listen(8000, () => {
  console.log("Server is running");
});
