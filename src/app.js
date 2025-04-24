const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const imageRouter = require("./routers/userRouter");

//
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/api', imageRouter);

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api testing is working good",
  });
});

module.exports = app;
