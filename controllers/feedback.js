const { createFeedbackUser, allFeedbacksAdmin } = require("../services/feedback");

const createFeedback = async (req, res) => {
  try {
    const user_id = req.user._id;
    const data = { ...req.body, user_id };
    const feedback = await createFeedbackUser(data);
    return res.status(200).send({
      data: feedback,
      message: "feedback saved successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};



const deleteFeedback = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const getFeedback = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if(isAdmin){
      const feedback = await allFeedbacksAdmin();
      return res.status(200).send({
        data:feedback,
        message:"all feedbacks here",
        success:true
      })
    }else{
      return res.status(401).send({
        message:"Unauthorized User",
        success:false
      })
    }
  } catch (error) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = {
  createFeedback,
  deleteFeedback,
  getFeedback,
};
