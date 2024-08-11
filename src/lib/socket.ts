import { Socket, Server } from "socket.io";
import http from "http";
const express = require("express");

const app = express()
const server = http.createServer(app);

app.get("/", (req: any, res: any) => {
    res.send("hello");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
})
