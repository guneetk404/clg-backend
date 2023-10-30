const { createEnquiry } = require("../services/enquiry");

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
          // const comment = await 
          } catch (error) {
                    return res.status(500).send({
                              message:"Internal Server Error",
                              success:false
                    })
          }
}


module.exports = { addEnquiry };
