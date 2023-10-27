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
});

const Document = mongoose.model("Document", DocumentSchema);

module.exports = Document;
