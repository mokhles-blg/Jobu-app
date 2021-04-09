const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

exports.SignIn = async (req, res) => {
  try {
    // get the req.body
    const { email, password } = req.body;
    console.log(email);
    // seach if the user exist
    const searchAdmin = await Admin.findOne({ email });
    console.log(searchAdmin);
    // send an error if he didnt exist
    if (!searchAdmin) {
      res.status(400).send({ errors: [{ msg: "User Not Found" }] });
      return;
    }
    // check if the send it password is equal to the current Password
    const hashedpass = searchAdmin._doc.password;
    const result = await bcrypt.compare(password, hashedpass);
    if (!result) {
      res.status(400).send({ errors: [{ msg: "Bad Credential" }] });
      return;
    }
    // else create a key
    const token = jwt.sign(
      {
        id: searchAdmin._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: 60 * 60 }
    );

    // send the details + a key
    res.status(200).send({ msg: "auth success", admin: searchAdmin, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: [{ msg: "can not get the admin" }] });
  }
};
