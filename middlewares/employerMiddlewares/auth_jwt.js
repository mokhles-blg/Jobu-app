const jwt = require("jsonwebtoken");
const Employer = require("../../models/Employer");

const isAuth = async (req, res, next) => {
  try {
    // test token
    const token = req.headers["authorization"];
    // if the token is undefined =>
    if (!token) {
      return res.status(400).send({ errors: [{ msg: "Unauthorized" }] });
    }
    // get the id from the token
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);

    // search the user
    const employer = await Employer.findById(decoded.id).select("-password");

    // send not authorisation IF NOT USER
    if (!employer) {
      return res.status(400).send({ errors: [{ msg: "Unauthorized" }] });
    }

    // if user exist
    req.employer = employer;

    next();
  } catch (error) {
    return res.status(500).send({ errors: [{ msg: "Unauthorized" }] });
  }
};

module.exports = isAuth;
