const {
  getUserByEmail,
  createUser,
  updateByEmail,
  deleteByEmail,
  bulkRegisterHelper,
} = require("../services/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  try {
    const email = req.user.email;
    const user = await getUserByEmail(email);

    if (!user) {
      res.status(401).send({
        message: "Sorry User details not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Sent User",
      user: user,
      success: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await getUserByEmail(email);

    if (req.user.isAdmin) {
      if (!user) {
        const data = req.body;
        const newUser = await createUser(data);
        return res.status(200).send({
          data: newUser,
          message: "User created successfully",
          success: true,
        });
      } else {
        return res.status(403).send({
          message: "User Already Present!",
          success: false,
        });
      }
    } else {
      return res.status(403).send({
        message: "not permitted",
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const email = req.body.email;
    const isAdmin = req.user.isAdmin;
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(400).send({
        message: "User does'nt exists",
        success: false,
      });
    }
    if (req.user.email === email || isAdmin) {
      const updatedUserData = req.body;
      const updatedUser = await updateByEmail(email, updatedUserData);
      return res.status(200).send({
        data: updatedUser,
        message: "User updated successfully ",
        success: true,
      });
    } else {
      return res.status(403).send({
        message: "not permitted",
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const email = req.user.email;
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(400).send({
        message: "User does'nt exists",
        success: false,
      });
    }
    if (req.user.isAdmin) {
      const deletedUser = deleteByEmail(email);
      return res.status(200).send({
        user: deletedUser,
        message: "User deleted successfully ",
        success: true,
      });
    } else {
      return res.status(401).send({
        message: "you are not authorized",
        success: false,
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    // console.log(req.body);
    const userId = req.body.email;
    const password = req.body.password;

    let user = await getUserByEmail(userId);
    console.log(user);
    if (!user) {
      return res.status(401).send({
        message: "Sorry wrong credentials",
        success: false,
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).send({
        message: "sorry Wrong Username or Password",
        success: false,
      });
    }

    const jwtKey = process.env.JWT_SECRET;
    const email = user.toObject().email;
    const isAdmin = user.toObject().isAdmin;
    const _id = user.toObject()._id;

    const token = jwt.sign({ email, isAdmin, _id }, jwtKey, {
      expiresIn: "2d",
    });

    res.status(200).send({
      user: user,
      token: token,
      message: "successfully Logged In",
      success: true,
    });
  } catch (err) {
    return res.status(400).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const bulkRegistrations = async (req, res) => {
  try {
    console.log(req.body);
    const registers = await bulkRegisterHelper(req.body);
    res.status(200).send({
      data: registers,
      message: "bulk registrations successful",
      success: true,
    });
  } catch (err) {
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
    });
  }
};
module.exports = {
  bulkRegistrations,
  getUser,
  loginUser,
  addUser,
  updateUser,
  deleteUser,
};
