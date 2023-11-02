const Feedback = require("../models/feedback");
const FeedbackParameter = require("../models/feedback_parameter");

const createFeedbackUser = async (data) => {
  const feedback = await Feedback.create(data);
  return feedback;
};

const getFeedbackUser = async (user_id) => {
  const feedbacks = await Feedback.find(user_id);
  return feedbacks;
};

const allFeedbacksAdmin = async () => {
  const feedbacks = await Feedback.find({});
  return feedbacks;
};
const getFeedbackParameter = async () =>{
  const feedbackParams = await FeedbackParameter.find({});
  return feedbackParams;
}

module.exports = { createFeedbackUser, getFeedbackUser, allFeedbacksAdmin ,getFeedbackParameter};
