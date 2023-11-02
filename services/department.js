const Department = require("../models/department");

const getAllDepartment = async () => {
  const departments = await Department.find({});
  return departments;
};

const addDepartment = async (data) => {
  const department = await Department.create(data);
  return department;
};

const deleteDepartmentById = async (id) => {
  const department = await Department.findByIdAndDelete(id);
  return department;
};

const updateDepartmentById = async () => {
  const department = await Department.findByIdAndDelete(id);
  return department;
};

module.exports = {
  getAllDepartment,
  addDepartment,
  deleteDepartmentById,
  updateDepartmentById,
};
