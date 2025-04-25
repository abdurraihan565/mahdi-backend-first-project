const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
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
// Serve entire public folder
app.use(express.static("public"));

// Serve images specifically from /images
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api', imageRouter);

app.get("/test", (req, res) => {
  res.status(200).send({
    message: "api testing is properly working good",
  });
});

module.exports = app;
