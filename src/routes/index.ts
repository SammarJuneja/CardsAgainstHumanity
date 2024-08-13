import { Server } from "socket.io";
import http from "http";
const express = require("express");

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"]
    },
});

io.on("connection", (socket) => {
    console.log("A new game just joined the game");

    socket.on("disconnect", () => {
        console.log("User left");
    });

    socket.on("joinGame", (game) => {
        socket.join(game);
        io.to(game).emit("annoucements", "A new player just joined");
    });

    socket.on("playCard", (data) => {
        io.to(data.room).emit("cardSelected", data.card);
    });
});

app.listen(4000, () => {
    console.log("Server is running on port 3000");
});