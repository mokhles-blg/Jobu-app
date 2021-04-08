const express = require("express");
const router = express.Router();
const { SignIn } = require("../controllers/admin");
const isAuth = require("../middlewares/adminMiddlewares/auth_jwt");

const {
  signinValidation,
  validation,
} = require("../middlewares/adminMiddlewares/admin");

router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.admin);
});

module.exports = router;
