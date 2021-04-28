const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ApplicationSchema = new Schema({
  userID: {
    type: String,
    required: true,
  },
  jobID: {
    type: String,
    required: true,
  },
  coverLetter: String,
});

module.exports = Application = model("application", ApplicationSchema);
