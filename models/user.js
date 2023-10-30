const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
  },
  mother_name: {
    type: String,
  },
  address: {
    address_line: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: Number,
    },
  },
  isAdmin:{
    type:Boolean,
    required:false,
  },
  dept_id: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
