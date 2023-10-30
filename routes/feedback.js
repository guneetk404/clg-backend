const express = require("express");

const router = express.Router();


router.post('/add')   // this is to post feedback from student

router.get("/get-parameter") // this is to display questions for feedback to students

module.exports = router;
