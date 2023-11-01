const {
  createEnquiry,
  createEnquiryComment,
  findEnquiryByUser,
  getEnquiryAdmin,
  getEnquiryCommentByEnquiryId,
  findEnquiryByEnquiryId,
} = require("../services/enquiry");

const addEnquiry = async (req, res) => {
  try {
    const user_id = req.user._id;
    const data = { ...req.body, user_id, status: "pending", date: new Date() };
    const enquiry = await createEnquiry(data);
    return res.status(200).send({
      data: enquiry,
      message: "Enquiry Created",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const getEnquiryUser = async (req, res) => {
  try {
    const user_id = req.user._id;
    const enquiries = await findEnquiryByUser(user_id);
    return res.status(200).send({
      data: enquiries,
      message: "enquiry fetched for user",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (isAdmin) {
      const enquiry_id = req.params.id;
      const user_id = req.user._id;
      const data = { ...req.body, enquiry_id, user_id };
      const comment = await createEnquiryComment(data);
      return res.status(200).send({
        data: comment,
        message: "comment created on enquiry",
        success: true,
      });
    } else {
      return res.status(401).send({
        message: "UnAuthorized Access",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const getAllEnquiries = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (isAdmin) {
      const allEnquiries = await getEnquiryAdmin();
      return res.status(200).send({
        data: allEnquiries,
        message: "fetched all enquiries",
        success: true,
      });
    } else {
      return res.status(401).send({
        message: "Unauthorized Access",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const getEnquiryComment = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    // console.log(isAdmin);
    const enquiry_id = req.params.id;

    const enquiry = await findEnquiryByEnquiryId(enquiry_id);
    const user = req.user._id;
   const isOwner =  user == enquiry?.user_id;
   
    if (isOwner || isAdmin) {
      // i want to authenticate that user sees his enquiry comments only ---- this is not secured yet
      // console.log(enquiry_id);

      const enquiryComments = await getEnquiryCommentByEnquiryId(enquiry_id);
      // console.log(enquiryComments);
      return res.status(200).send({
        data: enquiryComments,
        message: "All comments to this Enquiry fetched",
        success: true,
      });
    } else {
      return res.status(401).send({
        message: "Unauthorized Access",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
module.exports = {
  addEnquiry,
  addComment,
  getEnquiryUser,
  getAllEnquiries,
  getEnquiryComment,
};
