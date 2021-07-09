import express from "express";
import http from "http";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const server = http.createServer(app);
const socketio = require("./chat");
const io = socketio(server);
