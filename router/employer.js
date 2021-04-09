const express = require("express");
const router = express.Router();
const { Signup, SignIn } = require("../controllers/employer");
const isAuth = require("../middlewares/employerMiddlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/employerMiddlewares/employer");

router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.employer);
});

module.exports = router;
