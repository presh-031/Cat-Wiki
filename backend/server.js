const express = require("express");
const app = express();

require("dotenv").config();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

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
app.get("/", async (req, res) => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json();
    console.log(data);

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    // return res.status().json();
  }
});
