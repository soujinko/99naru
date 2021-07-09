import express from 'express'
import multer from 'multer'
import postsRouter from './posts.js'
import commentsRouter from './comments.js'
import path from 'path'

const router = express.Router()

router.get('/', (req, res, next) => {
	res.sendFile(path.join(path.resolve(), '/index.html'))
})

router.use('/api/posts', postsRouter)
router.use('/api/comments', commentsRouter)

export default router