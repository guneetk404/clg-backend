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
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
