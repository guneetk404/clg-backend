const Announcement = require("../models/announcement");

const getAllAnnouncement = async () => {
  const announcements = await Announcement.find({});
  return announcements;
};

const addAnnouncement = async (data) => {
  const newAnnoucement = await Announcement.create(data);
  return newAnnoucement;
};

const deleteAnnouncementById = async (id) => {
  const deletedAnnouncement = await Announcement.findByIdAndDelete(id);
  return deletedAnnouncement;
};
const updateAnnouncementById = async (id, data) => {
  const updatedAnnouncement = await Announcement.findByIdAndUpdate(id, data);
  return await Announcement.findById(id);
};

module.exports = {
  getAllAnnouncement,
  addAnnouncement,
  deleteAnnouncementById,
  updateAnnouncementById,
};
