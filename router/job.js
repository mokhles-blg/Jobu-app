const express = require("express");
const {
  addJob,
  deleteJob,
  updateJob,
  getListJobs,
  getJob,
} = require("../controllers/job");
const router = express.Router();

// testing the router
router.get("/test", (req, res) => {
  res.send("hello world");
});

router.post("/addJob", addJob);

router.delete("/:id", deleteJob);

router.put("/:id", updateJob);

router.get("/", getListJobs);

router.get("/:id", getJob);

module.exports = router;
