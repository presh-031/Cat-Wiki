const express = require("express");
const app = express();

require("dotenv").config();

// middleware

app.use("/", (req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Listen for requests
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Connected to db & Server listening on port ${port}`);
});

// routes
app.get("/", (req, res) => {
  res.status(200).send({
    mssg: "welcome to the app",
  });
});
