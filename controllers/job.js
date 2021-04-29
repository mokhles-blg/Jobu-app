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
  const { jobId } = req.params;
  try {
    const jobToDelete = await Job.findOneAndRemove({ _id: jobId });
    if (!jobToDelete) {
      res.status(200).send({ msg: "Job already deleted ..." });
      return;
    }
    res.status(200).send({ msg: "Job deleted ...", jobToDelete });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete job with this id !!", error });
  }
};

exports.editJob = async (req, res) => {
  const { _id } = req.params;
  const {
    title,
    location,
    salary,
    careerLevel,
    category,
    type,
    description,
  } = req.body;
  try {
    const jobToEdit = await Job.updateOne(
      { _id: _id },
      {
        $set: {
          title,
          location,
          salary,
          careerLevel,
          category,
          type,
          description,
        },
      }
    );
    if (!jobToEdit.nModified) {
      res.status(400).send({ msg: "Job already updated ..", jobToEdit });
      return;
    }
    res.status(200).send({ msg: "Job updated ..", jobToEdit });
  } catch (error) {
    res.status(400).send({ msg: "Can not edit job with this id !!", error });
  }
};

// viewer crud
exports.getListJobs = async (req, res) => {
  try {
    const filter = req.query;
    const finalFilter = {};
    filter.type && filter.type !== "All"
      ? (finalFilter.type = filter.type)
      : "";
    filter.category && filter.category !== "All"
      ? (finalFilter.category = filter.category)
      : "";
    filter.careerLevel && filter.careerLevel !== "All"
      ? (finalFilter.careerLevel = filter.careerLevel)
      : "";

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
    res.status(400).send({ msg: "Can not get the job", error });
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

exports.getJobsByEmployerId = async (req, res) => {
  try {
    const jobsToGet = await Job.find({ employerId: req.params.id });
    res.status(200).send({ msg: "I got the jobs", jobsToGet });
  } catch (error) {
    res.status(400).send({ msg: "Can not get the jobs", error });
  }
};
