const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { addEnquiry } = require("../controllers/enquiry");

const router = express.Router();


router.post("/add",userAuth,addEnquiry) // this is for students to post enquiry
router.post("/:id/comment")  // this is for admin to reply and comment on it
router.get("/") // this is to fetch all the enquiries for student
router.get("/all") // this is to fetch all enquiries for admin


module.exports = router;
