const express = require("express");
const {
  getUser,
  loginUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { userAuth } = require("../middlewares/auth");

const router = express.Router();

router.post("/login", loginUser);
router.get("/", userAuth, getUser);
router.post("/add-user", addUser);
router.put("/update-user", userAuth, updateUser); // can be changed by user and admin also
router.delete("/delete-user", userAuth, deleteUser); // only deleted by admin

module.exports = router;
