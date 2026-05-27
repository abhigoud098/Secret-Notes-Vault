//Requirements all handle here...
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { connectToMongoDB } = require("./connect");
const staticRoutes = require("./routes/StaticRoutes");
const userRoute = require("./routes/user");
const cookieParser = require("cookie-parser");
const noteRoute = require("./routes/note");

//MongoDb connection...
connectToMongoDB("mongodb://127.0.0.1:27017/private_notes").then(() => {
  console.log("Mongoose is connected");
});

const app = express();

//Middleware...
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

//Tell the server which technology i want to use for server side rend ring...
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "public"))); // Use for run public folder files it access able for browser....

//Routes...
app.use("/", staticRoutes);
app.use("/user", userRoute);
app.use("/note", noteRoute);

//Listening on port 8000...
app.listen(8000, () => {
  console.log("Server is running");
});
