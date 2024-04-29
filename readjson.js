const fs = require("fs");
const path = require("path");
exports.handler = (req, res) => {
  const db = require("./db.json");
  const dbFile = path.join(__dirname, "./db.json");
  return {
    statusCode: 200,
    body: JSON.stringify(dbFile),
    headers: {
      "Content-Type": "application/json"
    }
  };
};
module.exports.readjson = (req, res) => {
  const db = req.params.db;
  const filepath = path.join(__dirname, `./${db}.json`);

  fs.readFile(filepath, "utf8", (err, data) => {
    const jsonData = JSON.parse(data);
    if (err) return res.send({ err });
    res.json({ message: jsonData });
  });
};
