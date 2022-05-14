const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log("Welcome to PORT", port);
});
