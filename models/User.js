const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  name: {
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
  phone: String,
  address: String,
  savedJobs: Array,
  resume: String,
});

module.exports = User = model("user", UserSchema);
