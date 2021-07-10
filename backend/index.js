import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './api/index.js'
import multer from 'multer'
import { Server } from "socket.io";
import './models/index.js'



dotenv.config()
const app = express()
const server = http.createServer(app)
export const io = new Server(server)
console.log(io)

app.use(cors())
app.use(multer().none())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)
