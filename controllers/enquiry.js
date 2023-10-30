const { createEnquiry, createEnquiryComment } = require("../services/enquiry");

const addEnquiry = async (req, res) => {
  try {
    const enquiry = await createEnquiry(req.body);
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

const addComment = async (req,res) =>{
          try {
          const enquiryId = req.params.id;
          const userId = req.user._id;
          const data = {...req.body,enquiryId,userId};
          const comment = await createEnquiryComment(data);
          return res.status(200).send({
            data:comment,
            message:"comment created on enquiry",
            success:true
          })
          } catch (error) {
                    return res.status(500).send({
                              message:"Internal Server Error",
                              success:false
                    })
          }
}


module.exports = { addEnquiry , addComment};
