const Employer = require("../models/Employer");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.Signup = async (req, res) => {
  try {
    //   req.body
    const { firstName, lastName, address, state, email, password } = req.body;

    // check if the email is not found in the database
    const FoundEmployer = await Employer.findOne({ email });

    if (FoundEmployer) {
      res.status(400).send({
        errors: [{ msg: "user already exist email should be unique" }],
      });
      return;
    }
    const newEmployer = new Employer({
      firstName,
      lastName,
      address,
      state,
      email,
      password,
    });

    // hash the password
    const hashedpassword = bcrypt.hashSync(password, salt);
    newEmployer.password = hashedpassword;

    // create a key using json webtoken
    const token = jwt.sign(
      {
        id: newEmployer._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );
    //then we save it in the database
    await newEmployer.save();
    res
      .status(200)
      .send({ msg: "user saved succ", employer: newEmployer, token });
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
    const searchEmployer = await Employer.findOne({ email });

    // send an error if he didnt exist
    if (!searchEmployer) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchEmployer.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchEmployer._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res
      .status(200)
      .send({ msg: "auth success", employer: searchEmployer, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the currentUser" }] });
  }
};
