const User = require("../models/user");

const getUserById = (id) => {
  return {
    id,
    name: "ndkjankjn",
  };
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

module.exports = { getUserById, getUserByEmail };
