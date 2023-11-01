const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { addEnquiry, addComment, getEnquiryUser, getAllEnquiries, getEnquiryComment, updateStatus } = require("../controllers/enquiry");

const router = express.Router();


router.post("/add",userAuth,addEnquiry) // this is for students to post enquiry
router.post("/:id/comment",userAuth,addComment)  // this is for admin to reply and comment on it
router.get("/",userAuth,getEnquiryUser) // this is to fetch all the enquiries for student
router.get("/all",userAuth,getAllEnquiries) // this is to fetch all enquiries for admin
router.get("/:id",userAuth,getEnquiryComment) // this is to fetch all enquiry comment  for particular enquiry
router.put("/:id/update-status",userAuth,updateStatus);

module.exports = router;
