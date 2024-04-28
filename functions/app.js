const serverless = require("serverless-http");
const express = require("express");
const app = express();
const { readjson } = require("../readjson");

app.get("/.netlify/functions/app", (req, res) => {
  res.json({ mess: "Heloo" });
});

app.get("/.netlify/functions/app/api", (req, res) => {
  readjson(req, res);
});

module.exports.handler = serverless(app);
/*
const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('*', (req, res) => {
    res.send("say hello !!!")
});

module.exports.handler = serverless(app);*/
