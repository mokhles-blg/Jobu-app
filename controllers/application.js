const Application = require("../models/Application");
const Job = require("../models/Job");
const User = require("../models/User");

const apply = async (req, res) => {
  try {
    const { userID, jobID, coverLetter } = req.body;

    // handling errors : test if contact already exist with email
    const application = await Application.find({
      userID: userID,
      jobID: jobID,
    });
    if (application.length > 0) {
      res.status(400).send({ msg: "You already applied for this job !!!" });
      return;
    }

    // create and save the new contact
    const newApplication = new Application({
      userID,
      jobID,
      coverLetter,
    });
    await newApplication.save();
    res.status(200).send({
      msg: "Congratulations, you successfully applied for this job offer ...",
      newApplication,
    });
  } catch (error) {
    res.status(500).send({ msg: "impossible to apply", error });
  }
};

const getApplication = async (req, res) => {
  try {
    const { userID } = req.query;
    const applicationToFind = await Application.find({ userID: userID });
    console.log(applicationToFind);
    res
      .status(200)
      .send({ msg: "I found the applications ...", applicationToFind });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can not get application with this id !!", error });
  }
};

const getReceivedApps = async (req, res) => {
  try {
    const { employerId } = req.query;
    let result = [];
    const jobs = await Job.find({ employerId }, { _id: 1, title: 1 });
    await Promise.all(
      jobs.map(async (job) => {
        const apps = await Application.find({ jobID: job._id.toString() });
        await Promise.all(
          apps.map(async (app) => {
            const user = await User.findOne({ _id: app.userID });
            result.push({
              name: user.name,
              email: user.email,
              phone: user.phone,
              address: user.address,
              resume: user.resume,
              jobTitle: job.title,
              coverLetter: app.coverLetter,
            });
          })
        );
      })
    );

    /* .forEach(function (job) {
      Application.find({ jobID: resultElement._id }).forEach(function (app) {
        const userToFind = User.findOne({ _id: app.userId });
        result.push({ jobTitle: job.title, ...userToFind });
      });
    });*/
    res.status(200).send({ msg: "I found the applications ...", result });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can not get application with this id !!", error });
  }
};

module.exports = { apply, getApplication, getReceivedApps };
