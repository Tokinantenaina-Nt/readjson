const fs = require("fs");
const path = require("path");
module.exports.readjson = async (req, res) => {
  const filepath = await path.join(__dirname, "./functions/db.json");
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
