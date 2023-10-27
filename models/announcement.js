const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
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
  category: {
    type: String,
    required: true,
  },
  attachment_url: {
    type: String,
    required: true,
  },
});

const Announcement = mongoose.model("Announcement", AnnouncementSchema);

module.exports = Announcement;
