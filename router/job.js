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

// employer routes
/*
 *@descp : add Job
 *@path : "http://localhost:7000/api/jobs/"
 *@method : POST
 *@data : creating data
 *@access : private route
 */
router.post("/", isAuth, addJob);
/*
 *@descp : delete one job
 *@path : "http://localhost:7000/api/jobs/:id"
 *@method : DELETE
 *@data :  req.params.id
 *@access : private routes
 */
router.delete("/:id", isAuth, deleteJob);
/*
 *@descp : update one job
 *@path : "http://localhost:7000/api/jobs/:id"
 *@method : PUT
 *@data :  req.params.id
 *@access : private routes
 */
router.put("/:id", isAuth, updateJob);

// viewer routes
/*
 *@descp : get list of jobs
 *@path : "http://localhost:7000/api/jobs/"
 *@method : GET
 *@data :  all jobs
 *@access : public route
 */
router.get("/", getListJobs);
/*
 *@descp : get one job
 *@path : "http://localhost:7000/api/jobs/:id"
 *@method : GET
 *@data :  req.params.id
 *@access : public route
 */
router.get("/:id", getJob);

module.exports = router;
