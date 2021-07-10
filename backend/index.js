import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './api/index.js'
import multer from 'multer'
import './models/index.js'

dotenv.config()
const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(multer().none())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

export default server;