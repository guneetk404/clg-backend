const {
  getAllAnnouncement,
  addAnnouncement,
  deleteAnnouncementById,
  updateAnnouncementById,
} = require("../services/announcement");

const getAnnouncement = async (req, res) => {
  try {
    console.log("inside");
    const announcements = await getAllAnnouncement();
    return res.status(200).send({
      data: announcements,
      message: "annoucments shown",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error,
      success: false,
    });
  }
};

const createAnnouncement = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (isAdmin) {
      const announcement = await addAnnouncement(req.body);
      return res.status(200).send({
        data: announcement,
        messsage: "new annoucement added Successfully",
        success: true,
      });
    } else {
      return res.status(401).send({
        message: "Not Authorized",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "internal Server Error",
      success: false,
    });
  }
};

const deleteAnnouncement = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    const id = req.params.id;
    if (isAdmin) {
      const deleteAnnouncement = await deleteAnnouncementById(id);
      return res.status(200).send({
        data: deleteAnnouncement,
        message: "Deleted Annoucement Successfully",
        success: true,
      });
    } else {
      res.status(401).send({
        message: "Unauthorized user",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
const updateAnnouncement = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    const id = req.params.id;
    if (isAdmin) {
      const updateAnnouncement = await updateAnnouncementById(id, req.body);
      return res.status(200).send({
        data: updateAnnouncement,
        message: "Annoucement updated Successfully",
        success: true,
      });
    } else {
      res.status(401).send({
        message: "Unauthorized user",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = {
  getAnnouncement,
  createAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
};
