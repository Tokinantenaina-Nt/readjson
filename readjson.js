const fs = require("fs");
const path = require("path");
exports.handler = async (req, res) => {
  // const db = req.params.db;
  // const dbFile = path.join(__dirname, `./db/${db}.json`);
  // return {
  //   // statusCode: 200,
  //   // body: JSON.stringify(dbFile),
  //   // headers: {
  //   //   "Content-Type": "application/json"
  //   // }
  //   statusCode: 200,
  //   body: dbFile
  // };
};
module.exports.readjson = (req, res) => {
  const db = req.params.db;
  const filepath = path.join(__dirname, `./db/${db}.json`);

  fs.readFile(filepath, "utf8", (err, data) => {
    const jsonData = JSON.parse(data);
    if (err) return res.send({ err });
    res.json({ message: jsonData });
  });
};
