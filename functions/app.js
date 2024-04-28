const serverless = require("serverless-http");
const express = require("express");
const app = express();
const { readjson } = require("../readjson");

app.get("/.netlify/functions/app", (req, res) => {
  res.json({ mess: "Heloo" });
});

app.get("/.netlify/functions/app/api/:db", (req, res) => {
  readjson(req, res);
});

module.exports.handler = serverless(app);
