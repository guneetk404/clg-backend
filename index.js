const express = require("express");
require("./db/index");
const userRouter = require("./routes/user");

const app = express();

app.use("/user", userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
