const express = require("express");
const cors = require("cors");
require("./db/index");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const annoucementRouter = require("./routes/announcement");
const enquiryRouter = require("./routes/enquiry");
const documentRouter = require("./routes/document");
const feedbackRouter = require("./routes/feedback");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/announcement", annoucementRouter);
app.use("/enquiry", enquiryRouter);
app.use("/document", documentRouter);
app.use("/feedback", feedbackRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
