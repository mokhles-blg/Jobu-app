const Application = require("../models/Application");

const apply = async (req, res) => {
  try {
    const { userID, jobID } = req.body;

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
    const newApplication = new Application({ userID, jobID });
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
    const { jobID } = req.query;
    const appToFind = await Application.find({ jobID: jobID });
    console.log(appToFind);
    res.status(200).send({ msg: "I found the applications ...", appToFind });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "Can not get application with this id !!", error });
  }
};

module.exports = { apply, getApplication, getReceivedApps };
