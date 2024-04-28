const fs = require("fs");
const path = require("path");
const db = require("./db.json");
// exports.handler = () => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(db),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };
// };
module.exports.readjson = (req, res) => {
  const filepath = path.join(__dirname, "./db.json");

  fs.readFile(filepath, "utf8", (err, data) => {
    const jsonData = JSON.parse(data);
    if (err) return res.send({ err });
    res.json({ message: jsonData });
  });
};
