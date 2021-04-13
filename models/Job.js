const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  exigence: String,
  date: Date,
  jobType: String,
  experience: String,
  studyLevel: String,
  remuneration: String,
  language: String,
  gender: String,
});

module.exports = Job = model("job", JobSchema);
