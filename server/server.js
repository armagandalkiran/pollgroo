const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const authRoute = require("./routes/auth.js");
const panelRoute = require("./routes/panel");
const gameRoute = require("./routes/game");

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
app.use("/api/games", gameRoute);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("ping", (data) => {
    socket.broadcast.emit("pong", data);
  });
});

let port = process.env.PORT;
if (process.env.PORT === null || process.env.PORT === "") {
  port = 5000;
}

server.listen(port, () => {
  console.log(`Server is up on http://localhost:${port}/ 🚀`);
});
