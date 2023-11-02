const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  overall_rating: {
    type: Number,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  feedback: [
    {
      feedback_parameter_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FeedbackParameter",
      },
      feedback_parameter_value: {
        type: String,
        required: true,
      },
    },
  ],
  suggestion:{
    type:String,
  }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
