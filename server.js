// requirement
const express = require("express");
const connectDB = require("./config/connectDB");
const fileUpload = require("express-fileupload");

require("dotenv").config();
// instance app
const app = express();
// connection db
connectDB();
// middleware global
app.use(express.json());
app.use(fileUpload());
app.use(express.static(__dirname + "/public"));

// router
app.use("/api/user", require("./router/user"));
app.use("/api/job", require("./router/job"));
app.use("/api/getSavedJobs", require("./router/getSavedJobs"));
app.use("/api/post", require("./router/post"));
app.use("/api/application", require("./router/application"));

// PORT
const PORT = process.env.PORT;
// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
