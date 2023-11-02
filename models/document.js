const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  attachment_url: {
    type: String,
    required: true,
  },
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
});

const Document = mongoose.model("Document", DocumentSchema);

module.exports = Document;
