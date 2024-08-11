import { Socket, Server } from "socket.io";
import http from "http";
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(3000, () => {
    console.log("Server running on port 3000");
})
