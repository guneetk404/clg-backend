const express = require("express");
const { userAuth } = require("../middlewares/auth");
const {
  createAnnouncement,
  getAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
} = require("../controllers/announcement");
// const { getAllAnnouncement } = require("../services/announcement");

const router = express.Router();

router.get("/", userAuth, getAnnouncement);
router.post("/add", userAuth, createAnnouncement);
router.put("/update/:id", userAuth, updateAnnouncement);
router.delete("/delete/:id", userAuth, deleteAnnouncement);

module.exports = router;
