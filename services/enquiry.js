const Enquiry = require("../models/enquiry")
const EnquiryComment = require("../models/enquiry_comments")

const createEnquiry = async (data) => {
    const enquiry = await Enquiry.create(data);
    return enquiry
}

const createEnquiryComment = async (data) => {
    console.log(data)
    const comment = await EnquiryComment.create(data)
    return comment;
}



module.exports = { createEnquiry, createEnquiryComment }