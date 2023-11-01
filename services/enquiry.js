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
  const enquires = await Enquiry.find({ user_id });
  return enquires;
};
const findEnquiryByEnquiryId = async (enquiry_id) => {
  const enquires = await Enquiry.findById(enquiry_id);
  return enquires;
};

const getEnquiryAdmin = async () => {
  const enquires = await Enquiry.find({});
  return enquires;
};

const getEnquiryCommentByEnquiryId = async (enquiry_id) => {
  const comments = await EnquiryComment.find({ enquiry_id });
  return comments;
};
const updateEnquiryStatus = async (id, data) => {
  const update = await Enquiry.findByIdAndUpdate(id, data);
  return update;
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
};
