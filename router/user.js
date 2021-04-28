const express = require("express");
const router = express.Router();
const {
  Signup,
  SignIn,
  ShowUserInfos,
  ShowAllUsers,
  SaveJob,
  UploadResume,
  DeleteUser,
} = require("../controllers/user");
const isAuth = require("../middlewares/auth_jwt");

const {
  registerValidation,
  signinValidation,
  validation,
} = require("../middlewares/user");
// route user (signin + signup)
router.post("/signup", registerValidation(), validation, Signup);
router.post("/signin", signinValidation(), validation, SignIn);
router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});
router.get("/profile/:id", ShowUserInfos);
router.get("/users", ShowAllUsers);
router.put("/saveJob", SaveJob);
router.post("/uploadResume", UploadResume);
router.delete("/deleteUser/:userId", DeleteUser);
module.exports = router;
