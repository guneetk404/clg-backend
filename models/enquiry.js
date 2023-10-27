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
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

module.exports = Enquiry;
