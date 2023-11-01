const Document = require("../models/document")


const addDocument = async (data) =>{
          const document  = await Document.create(data);
          return document;
}

const getDocumentByUser = async (user_id) => {
          const document = await Document.find({user_id});
          return document;
}

const deleteDocumentById = async(id) =>{
          const deletedDocument = await Document.findByIdAndDelete(id);
          return deletedDocument
}

module.exports = {addDocument,getDocumentByUser,deleteDocumentById}