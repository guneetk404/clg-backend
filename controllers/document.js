const { addDocument, deleteDocumentById, getDocumentByUser } = require("../services/document");

const createDocument = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (isAdmin) {
      const document = await addDocument(req.body);
      return res.status(200).send({
        data: document,
        message: "Document added successfully for user",
        success: true,
      });
    } else {
      return res.status(401).send({
        message: "Unauthorized Access",
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

const deleteDocument = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    const id = req.params.id;
    if (isAdmin) {
      const deletedDocument = await deleteDocumentById(id);
      return res.status(200).send({
        data: deletedDocument,
        message: "Document successfully deleted",
        success: true,
      });
    } else {
      return res.status(401).send({
        message: "Unauthorized Access",
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

const getDocument = async (req, res) => {
  try {
    const user_id = req.user._id;
    const documents = await getDocumentByUser(user_id);
    return res.status(200).send({
          data:documents,
          message:"Document fetched successfully",
          success:true
    })
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

module.exports = { createDocument, deleteDocument, getDocument };
