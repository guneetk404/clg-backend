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
    index: true,
    unique: true,
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
    default: "",
  },
  mother_name: {
    type: String,
    default: "",
  },
  address: {
    address_line: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    pincode: {
      type: Number,
      default: null,
    },
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
  dept_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
