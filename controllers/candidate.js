const Candidate = require("../models/Candidate");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.Signup = async (req, res) => {
  try {
    //   req.body
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      address,
      state,
      postalCode,
      phoneNumber,
      email,
      password,
      education,
      levelOfEducation,
      workExperience,
    } = req.body;

    // check if the email is not found in the database
    const FoundCandidate = await Candidate.findOne({ email });

    if (FoundCandidate) {
      res.status(400).send({
        errors: [{ msg: "user already exist email should be unique" }],
      });
      return;
    }
    const newCandidate = new Candidate({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      address,
      state,
      postalCode,
      phoneNumber,
      email,
      password,
      education,
      levelOfEducation,
      workExperience,
    });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newCandidate.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newCandidate._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newCandidate.save();
    res
      .status(200)
      .send({ msg: "user saved succ", candidate: newCandidate, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not save the user" }] });
  }
};

exports.SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    // seach if the user exist
    const searchCandidate = await Candidate.findOne({ email });

    // send an error if he didnt exist
    if (!searchCandidate) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchCandidate.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchCandidate._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res
      .status(200)
      .send({ msg: "auth success", candidate: searchCandidate, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};
