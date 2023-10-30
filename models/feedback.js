const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  feedback_parameter_value: {
    type: String,
    required: true,
  },
  overall_rating: {
    type: Number,
    required: true,
  },
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  feedback_parameter_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'FeedbackParameter'

  }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
