const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());

app.get("/game/:id", function (req, res) {
  fs.readFile(__dirname + "/game.json", "utf8", function (err, data) {
    const { offset, limit } = req.query;
    const jsonData = JSON.parse(data);

    if (!jsonData.data[offset - 1]) {
      res.status(200).json({ message: "Sorular tamamlandi", status: 200 });
    }

    if (req.params.id === jsonData.id)
      res.status(200).json(jsonData.data[offset - 1]);
    else {
      res.status(404).json({ errorMessage: "Oyun bulunamadi" });
    }
  });
});

app.get("/panel", function (req, res) {
  fs.readFile(__dirname + "/panel.json", "utf8", function (err, data) {
    res.end(data);
  });
});

const server = app.listen(5000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
