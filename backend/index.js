import express from "express";
import http from "http";
import dotenv from "dotenv";
import io from "./chat";

dotenv.config();
const app = express();
const server = http.createServer(app);
