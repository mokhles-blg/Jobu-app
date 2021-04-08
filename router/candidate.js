const express = require("express");
const router = express.Router();
const { Signup, SignIn } = require("../controllers/candidate");
const isAuth = require("../middlewares/candidateMiddlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/candidateMiddlewares/candidate");

router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.candidate);
});

module.exports = router;
