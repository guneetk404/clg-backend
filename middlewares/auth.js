const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
  try {
    const [, token] = req.headers?.authorization.split(" ");
    const user = jwt.verify(token, process.env.JWT_SECRET);

//     // console.log(user);
    req.user = user;
    // console.log(req.user.email);
    next();
  } catch (error) {
    // console.log(error);
    return res.status(401).send({
      message: "auth failed",
      success: false,
    });
  }
};

module.exports = { userAuth };
