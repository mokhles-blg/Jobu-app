const express = require("express");
const {
  addJob,
  deleteJob,
  editJob,
  getListJobs,
  getJob,
  getJobsByEmployerId,
  // getJobsByEmployerId,
} = require("../controllers/job");
const router = express.Router();

// testing the router
router.get("/test", (req, res) => {
  res.send("hello world");
});

router.post("/addJob", addJob);

router.delete("/deleteJob/:jobId", deleteJob);

router.put("/editJob/:_id", editJob);

router.get("/", getListJobs);

router.get("/:id", getJob);

router.get("/myPosts/:id", getJobsByEmployerId);

module.exports = router;
