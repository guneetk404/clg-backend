const {
  addDepartment,
  deleteDepartmentById,
  getAllDepartment,
  updateDepartmentById,
} = require("../services/department");

const createDepartment = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (isAdmin) {
      const department = await addDepartment(req.body);
      return res.status(200).send({
        data: department,
        message: "Department Created Successfully",
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
const getDepartment = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    if (isAdmin) {
      const departments = await getAllDepartment;

      return res.status(200).send({
        data: departments,
        message: "Department fetched Successfully",
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

const updateDepartment = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    const _id = req.params.id;
    if (isAdmin) {
      const department = await updateDepartmentById(_id);
      return res.status(200).send({
        data: department,
        message: "Department updated Successfully",
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

const deleteDepartment = async (req, res) => {
  try {
    const isAdmin = req.user.isAdmin;
    const _id = req.params.id;

    if (isAdmin) {
      const department = await deleteDepartmentById(_id);

      return res.status(200).send({
        data: department,
        message: "Department deleted Successfully",
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

module.exports = {
  createDepartment,
  getDepartment,
  deleteDepartment,
  updateDepartment,
};
