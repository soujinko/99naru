import express from 'express'
import http from 'http'
import dotenv from 'dotenv'

const app = express()
const server = http.createServer(app)