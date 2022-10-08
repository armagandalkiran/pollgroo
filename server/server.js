const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());

app.get("/game", function (req, res) {
  fs.readFile(__dirname + "/game.json", "utf8", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

const server = app.listen(5000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
