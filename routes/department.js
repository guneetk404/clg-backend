const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { getDepartment, createDepartment, updateDepartment, deleteDepartment } = require("../controllers/department");
const router = express.Router();

router.get("/", userAuth,getDepartment);
router.post("/add", userAuth,createDepartment);
router.put("/:id/update", userAuth,updateDepartment);
router.delete("/:id/delete", userAuth,deleteDepartment);

module.exports = router;
