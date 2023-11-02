const Enquiry = require("../models/enquiry");
const EnquiryComment = require("../models/enquiry_comments");

const createEnquiry = async (data) => {
  const enquiry = await Enquiry.create(data);
  return enquiry;
};

const createEnquiryComment = async (data) => {
  const comment = await EnquiryComment.create(data);
  return comment;
};

const findEnquiryByUser = async (user_id) => {
  const enquires = await Enquiry.find({ user_id }).populate("comments.comment_id");
  return enquires;
};
const findEnquiryByEnquiryId = async (enquiry_id) => {
  const enquires = await Enquiry.findById(enquiry_id);
  return enquires;
};

const getEnquiryAdmin = async () => {
  try {
    const enquires = await Enquiry.find({}).populate("comments.comment_id").populate({
      path:'user_id',
      select:'email'
    });
    return enquires;
  } catch (error) {
    console.log(error);
  }
};

const getEnquiryCommentByEnquiryId = async (enquiry_id) => {
  const comments = await EnquiryComment.find({ enquiry_id });
  return comments;
};
const updateEnquiryStatus = async (id, data) => {
  const update = await Enquiry.findByIdAndUpdate(id, data);
  return update;
};
const updateCommentId = async (id, comment_id) => {
  const enquiry = await Enquiry.findById(id);
  enquiry.comments.push({ comment_id });
  await enquiry.save();
  return enquiry;
};

getEnquiryCommentByEnquiryId;
module.exports = {
  createEnquiry,
  createEnquiryComment,
  findEnquiryByUser,
  getEnquiryAdmin,
  getEnquiryCommentByEnquiryId,
  findEnquiryByEnquiryId,
  updateEnquiryStatus,
  updateCommentId,
};
