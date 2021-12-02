const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

io.on('connection', (socket) => {
  console.log(`A user with id #${socket.id} connected`);
});

server.listen(8000, () => {
  console.log('listening on *:8000');
});