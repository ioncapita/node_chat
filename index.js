const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const PORT = 3000;


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("<h1>Hello world from Express</h1>");
});

io.on("connection", (socket) => {
  console.log(socket);
});

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
