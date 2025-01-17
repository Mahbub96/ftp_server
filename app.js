const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// internal imports
const videosRoute = require("./routers/videosRoute");

const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, "../videos/")));

// routes
app.use("/movies", videosRoute);

// final error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    errors: {
      msg: err.message,
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log(`successfully running on port ${process.env.PORT}`);
});
