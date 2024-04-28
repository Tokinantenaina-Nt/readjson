const express = require("express");
const app = express();
const { readjson } = require("./readjson");
app.get("/", (req, res) => {
  res.json({ mess: "Heloo" });
});
app.get("/api", (req, res) => {
  readjson(req, res);
});
app.listen(8080, () => {
  console.log("listen on 8080");
});
