const User = require("../models/user");
const bcrypt = require("bcrypt");

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

const createUser = async (data) => {
  // console.log(data);
  const password = "abc";
  const hashedPassword = bcrypt.hashSync(password, 8);
  const user = await User.create({ ...data, password: hashedPassword });
  return user;
};

const updateByEmail = async (email, data) => {
  const user = await User.findOneAndUpdate({ email }, data);
  return user;
};

const deleteByEmail = async (email) => {
  const user = await User.findOneAndDelete(email);
  return user;
};

const bulkRegisterHelper = async (data) => {
  const password = "abc";
  const hashedPassword = bcrypt.hashSync(password, 8);

  const userData = data.map((user) => ({ ...user, password }));
  const users = await User.insertMany(userData);
  return users;
};

module.exports = {
  getUserByEmail,
  bulkRegisterHelper,
  createUser,
  updateByEmail,
  deleteByEmail,
};
