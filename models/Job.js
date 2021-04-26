const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const JobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: String,
  type: String,
  carrerLevel: String,
});

module.exports = Job = model("job", JobSchema);
