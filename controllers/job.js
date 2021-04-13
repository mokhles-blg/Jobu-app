const Job = require("../models/Job");

// employer cruds
exports.addJob = async (req, res) => {
  try {
    const {
      title,
      company,
      region,
      description,
      exigence,
      date,
      jobType,
      experience,
      studyLevel,
      remuneration,
      language,
      gender,
    } = req.body;
    // fields required
    if (!title || !company || !location || !description) {
      res.status(400).send({ msg: "these fields are required" });
      return;
    }
    const newJob = new Job({
      title,
      company,
      region,
      description,
      exigence,
      date,
      jobType,
      experience,
      studyLevel,
      remuneration,
      language,
      gender,
    });
    await newJob.save();
    res.status(200).send({ msg: "Job posted successfully", newJob });
  } catch (error) {
    res.status(400).send({ msg: "can not add this job", error });
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
    const listJobs = await Job.find();
    res.status(200).send({ msg: "this is the list of jobs", listJobs });
  } catch (error) {
    res.status(400).send({ msg: "can not get contacts", error });
  }
};

exports.getJob = async (req, res) => {
  try {
    const jobToGet = await Job.findOne({ _id: req.params.id });
    res.status(200).send({ msg: " i got the job", jobToGet });
  } catch (error) {
    res.status(400).send({ msg: "can not get the job", jobToGet });
  }
};
