const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const PostSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: Number,
  region: String,
  address: String,
  studyLevel: String,
  language: String,
  gender: String,
  experience: String,
  resume: String,
});

module.exports = Post = model("post", PostSchema);
