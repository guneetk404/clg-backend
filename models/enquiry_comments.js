const mongoose = require("mongoose");

const EnquiryCommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  enquiry_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Enquiry'
  }
  
});

const EnquiryComment = mongoose.model("EnquiryComment", EnquiryCommentSchema);

module.exports = EnquiryComment;
