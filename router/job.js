const express = require("express");
const {
  addJob,
  deleteJob,
  updateJob,
  getListJobs,
  getJob,
} = require("../controllers/job");
const router = express.Router();
const isAuth = require("../middlewares/auth_jwt");

// testing the router
router.get("/test", (req, res) => {
  res.send("hello world");
});

router.post("/", isAuth, addJob);

router.delete("/:id", isAuth, deleteJob);

router.put("/:id", isAuth, updateJob);

router.get("/", getListJobs);

router.get("/:id", getJob);

module.exports = router;
