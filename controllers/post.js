const Post = require("../models/Post");

// candidate crud
exports.postForJob = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      region,
      address,
      studyLevel,
      language,
      gender,
      experience,
      resume,
    } = req.body;
    // fields required
    if (!name || !email || !phone) {
      res.status(400).send({ msg: "these fields are required" });
      return;
    }
    const newPost = new Post({
      name,
      email,
      phone,
      region,
      address,
      studyLevel,
      language,
      gender,
      experience,
      resume,
    });
    await newPost.save();
    res.status(200).send({ msg: "Job posted successfully", newPost });
  } catch (error) {
    res.status(400).send({ msg: "can not add this job", error });
  }
};
