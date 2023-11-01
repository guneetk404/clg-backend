const express = require("express");
const { userAuth } = require("../middlewares/auth");
const { createDocument, deleteDocument, getDocument } = require("../controllers/document");

const router = express.Router();

router.post("/add",userAuth,createDocument); //add document by admin for student
router.delete("/:id/delete",userAuth,deleteDocument); //delete document by admin
router.get("/",userAuth,getDocument);  // document fetch for student

module.exports = router;
