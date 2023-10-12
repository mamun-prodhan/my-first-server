const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("My first ever server is running");
});

app.get("/data", (req, res) => {
  res.send("Hey where is data....youuuuu..I am here....comming brooooo");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
