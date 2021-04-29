// requirement
const express = require("express");
const connectDB = require("./config/connectDB");
const fileUpload = require("express-fileupload");
const path = require("path");

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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// PORT
const PORT = process.env.PORT;
// create server
app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server is running on PORT ${PORT}`)
);
