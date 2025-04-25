const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const imageRouter = require("./routers/userRouter");

//
const app = express();
app.use(morgan("dev"));
app.use(cors(
 {
    origin: 'https://99polygon.com',
    credentials: true,
  }
));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/api', imageRouter);

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api testing is properly working good",
  });
});

module.exports = app;
