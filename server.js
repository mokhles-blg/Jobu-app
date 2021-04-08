const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();

connectDB();
// middleware global
app.use(express.json());
// router
app.use("/api/admin", require("./router/admin"));
app.use("/api/candidate", require("./router/candidate"));
app.use("/api/employer", require("./router/employer"));
const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
