const express = require("express");
require("./db/index");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const annoucementRouter = require("./routes/announcement");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/announcement", annoucementRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
