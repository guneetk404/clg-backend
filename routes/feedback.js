const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { createFeedback, getFeedback, getFeedbackParams } = require("../controllers/feedback");

const router = express.Router();

router.post("/add", userAuth, createFeedback); // this is to post feedback from student
router.get("/",userAuth,getFeedback); // this is to get all feedback for admin

router.get("/get-parameter",getFeedbackParams); // this is to display questions for feedback to students

module.exports = router;
