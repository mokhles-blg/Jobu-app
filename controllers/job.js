const Job = require("../models/Job");

// employer cruds
exports.addJob = async (req, res) => {
  try {
    const {
      title,
      location,
      description,
      category,
      careerLevel,
      type,
      salary,
      employerId,
    } = req.body;
    // fields required
    if (!title || !location || !description || !salary || !employerId) {
      res.status(400).send({ msg: "One required field is missing" });
      return;
    }
    const newJob = new Job({
      title,
      location,
      description,
      category,
      careerLevel,
      type,
      salary,
      employerId,
    });
    await newJob.save();
    res.status(200).send({ msg: "Job posted successfully", newJob });
  } catch (error) {
    res.status(400).send({ msg: "Can not add this job", error });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const jobToDelete = await Job.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ msg: "job deleted", jobToDelete });
  } catch (error) {
    res.status(400).send({ msg: "can not delete this job", jobToDelete });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const jobToUpdate = await Job.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "job updated", jobToUpdate });
  } catch (error) {
    res.status(400).send({ msg: "can not update the job", jobToUpdate });
  }
};

// viewer crud
exports.getListJobs = async (req, res) => {
  try {
    const filter = req.query;
    const finalFilter = {};
    filter.type ? (finalFilter.type = filter.type) : "";
    filter.category ? (finalFilter.category = filter.category) : "";
    filter.careerLevel ? (finalFilter.careerLevel = filter.careerLevel) : "";

    const listJobs = await Job.find({
      title: {
        $regex: filter.keyword ? ".*" + filter.keyword + ".*" : "",
        $options: "i",
      },
      location: {
        $regex: filter.location ? ".*" + filter.location + ".*" : "",
        $options: "i",
      },
      ...finalFilter,
    });
    res.status(200).send({ msg: "this is the list of jobs", listJobs });
  } catch (error) {
    res.status(400).send({ msg: "can not get contacts", error });
  }
};

exports.getJob = async (req, res) => {
  try {
    const jobToGet = await Job.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "I got the job", jobToGet });
  } catch (error) {
    res.status(400).send({ msg: "Can not get the job", jobToGet });
  }
};

//gets the savedjobs for a user
exports.getJobs = async (req, res) => {
  try {
    const jobsToGet = await Job.find({
      _id: { $in: JSON.parse(req.query.savedJobsIds) },
    });
    res.status(200).send({ msg: "I got the jobs", jobsToGet });
  } catch (error) {
    res.status(400).send({ msg: "Can not get the jobs", jobsToGet });
  }
};
