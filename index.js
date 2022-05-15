const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Static Files
app.use(express.static("public"));
app.use("/js", express.static(__dirname + "public/js"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/translate/normal", (req, res) => {
  let englishLine = req.body.name;
  res.json({ name: englishLine });
});

app.listen(port, () => {
  console.log("Welcome to PORT", port);
});
