const express = require("express");
const morgan = require("morgan");
const app = express();

require("dotenv").config();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

// middleware
app.use(morgan("dev"));

// Listen for requests
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Connected to db & Server listening on port ${port}`);
});

// routes
app.get("/api", async (req, res) => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json();

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res.status(500).json([{}]);
  }
});

app.get("/api/photos/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const images = [];
  try {
    for (let i = 0; i < 8; i++) {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`);
      const data = await response.json();
      // push data into images array so server responds once
      images.push(data);
    }

    res.status(200).send(images);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      mssg: "error getting images",
    });
  }
});
