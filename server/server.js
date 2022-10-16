const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth.js");
const panelRoute = require("./routes/panel");

dotenv.config();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successfully connected to the database !"))
  .catch((err) => {
    console.log(err);
  });

app.use("", authRoute);
app.use("/api/panel", panelRoute);

let port = process.env.PORT;
if (process.env.PORT === null || process.env.PORT === "") {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Server is up on http://localhost:${port}/ 🚀`);
});

// app.get("/game/:id", function (req, res) {
//   fs.readFile(__dirname + "/game.json", "utf8", function (err, data) {
//     const { offset, limit } = req.query;
//     const jsonData = JSON.parse(data);

//     if (!jsonData.data[offset - 1]) {
//       res.status(200).json({ message: "Sorular tamamlandi", status: 200 });
//     }

//     if (req.params.id === jsonData.id)
//       res.status(200).json(jsonData.data[offset - 1]);
//     else {
//       res.status(404).json({ errorMessage: "Oyun bulunamadi" });
//     }
//   });
// });

// app.get("/panel", function (req, res) {
//   fs.readFile(__dirname + "/panel.json", "utf8", function (err, data) {
//     res.end(data);
//   });
// });

// const server = app.listen(5000, function () {
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log("App listening at http://%s:%s", host, port);
// });
