const express = require("express");
const { postForJob } = require("../controllers/post");
const router = express.Router();

const isAuth = require("../middlewares/auth_jwt");

// candidate routes
router.post("/", isAuth, postForJob);

module.exports = router;
