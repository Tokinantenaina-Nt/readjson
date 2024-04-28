const fs = require("fs");
const path = require("path");
module.exports.readjson = (req, res) => {
  //   const filepath = "./db/db.json";
  const filepath = path.join(__dirname, "db/db.json");
  fs.access(filepath, fs.constants.F_OK, err => {
    if (err) {
      return res.status(404).json({ message: err });
    }
    fs.readFile(filepath, "utf8", (err, data) => {
      const jsonData = JSON.parse(data);
      if (err) return res.send({ err });
      res.json({ message: jsonData.message });
    });
  });
};
