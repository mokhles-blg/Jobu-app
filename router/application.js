const express = require("express");
const router = express.Router();
const {
  apply,
  getApplication,
  getReceivedApps,
} = require("../controllers/application");
router.post("/apply", apply);
router.get("/myApplications", getApplication);
router.get("/receivedApps", getReceivedApps);
module.exports = router;
