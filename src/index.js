const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicDirectoryPath));

io.on("connection", socket => {
  console.log("New WebSocket Connection");

  socket.emit("welcomeEvent", "Welcome!");
  socket.on("messageSent", message => {
    io.emit("message", message);
  });
});

server.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
