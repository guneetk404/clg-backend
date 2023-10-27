const mongoose = require("mongoose");

const FeedbackParameterSchema = new mongoose.Schema({
  parameter: {
    type: String,
    required: true,
  },
  options: [
    {
      title: String,
      value: Number,
    },
  ],
});

const FeedbackParameter = mongoose.model(
  "FeedbackParameter",
  FeedbackParameterSchema
);

module.exports = FeedbackParameter;
