const User = require("../models/User");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
var fs = require("file-system");

exports.Signup = async (req, res) => {
  try {
    // req.body
    const { role, name, email, password, phone, address } = req.body;

    // check if the email already exists in the database
    const FoundUser = await User.findOne({ email });

    if (FoundUser) {
      res.status(400).send({
        errors: [{ msg: "user already exists, email should be unique" }],
      });
      return;
    }
    const newUser = new User({ role, name, email, password, phone, address });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newUser.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    // save the new user in the database
    await newUser.save();
    res
      .status(200)
      .send({ msg: "User registered successfully", user: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "Can not register the user" }] });
  }
};

exports.SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    // search if the user exists
    const searchUser = await User.findOne({ email });

    // send an error if he didnt exist
    if (!searchUser) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the sent password is equal to the current Password
    const hashedpass = searchUser.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "Auth success", user: searchUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "Can not get the currentUser" }] });
  }
};

exports.ShowUserInfos = async (req, res) => {
  try {
    const id = req.params.id;
    const userToFind = await User.findOne({ _id: id });
    console.log(userToFind);
    res.status(200).send({ msg: "I found the user ...", userToFind });
  } catch (error) {
    res.status(400).send({ msg: "Can not get user with this id !!", error });
  }
};

exports.ShowAllUsers = async (req, res) => {
  try {
    const listUsers = await User.find();
    res.status(200).send({ msg: "This is the list of users ...", listUsers });
  } catch (error) {
    res.status(400).send({ msg: "Can not get all users !!", error });
  }
};

exports.SaveJob = async (req, res) => {
  try {
    const { userId, jobId } = req.body;
    await User.updateOne({ _id: userId }, { $push: { savedJobs: jobId } });
    res.status(200).send({ msg: "Job saved successfully" });
  } catch (error) {
    res.status(400).send({ msg: "Can not save job", error });
  }
};

exports.UploadResume = async (req, res) => {
  try {
    let imageFile = req.body.file;
    let userId = req.body.userId;
    //await imageFile.mv(`${__dirname}/../resumes/${req.body.filename}.pdf`);
    const filter = { _id: userId };
    const update = { $set: { resume: imageFile } };
    const options = { returnNewDocument: true };
    const updatedUser = await User.findOneAndUpdate(filter, update, options);
    res
      .status(200)
      .send({ msg: "Resume uploaded successfully", updatedUser: updatedUser });
  } catch (error) {
    res.status(400).send({ msg: "Can not upload resume", error });
  }
};

exports.DeleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const userToDelete = await User.findOneAndRemove({ _id: userId });
    // console.log(contactToDelete)
    if (!userToDelete) {
      res.status(200).send({ msg: "User already deleted ..." });
      return;
    }
    res.status(200).send({ msg: "User deleted ...", userToDelete });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete user with this id !!", error });
  }
};
