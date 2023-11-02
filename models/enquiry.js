const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"EnquiryComment"
      },
    },
  ],
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

module.exports = Enquiry;
