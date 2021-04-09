const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CandidateSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  education: {
    type: String,
  },
  levelOfEducation: {
    type: String,
  },
  workExperience: {
    type: String,
  },
});

module.exports = Candidate = model("candidate", CandidateSchema);
