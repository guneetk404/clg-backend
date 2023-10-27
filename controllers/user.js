const { getUserById, getUserByEmail } = require("../services/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUser = (req, res) => {
  const user = getUserById(1);
  res.send(user);
};

const loginUser = async (req, res) => {
  try {
    const userId = req.body.id;
    const password = req.body.password;

    let user = await getUserByEmail(userId);

    if (!user) {
      res.status(401).send({
        message: "Sorry wrong credentials  ",
        success: false,
      });
    }

    const checkPassword = bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(401).send({
        message: "sorry Wrong Credentials",
      });
    }

    const jwtKey = process.env.JWT_SECRET;
    const userData = user.toObject().email;
    const token = jwt.sign({ userData }, jwtKey, { expiresIn: "2d" });

    res.status(200).send({
      user: user,
      token: token,
      message: "successfully Logged In",
      success: true,
    });
  } catch (err) {
    // console.log(err);
    return res.status(500).end("Internal Server Error");
  }
};

module.exports = { getUser, loginUser };
