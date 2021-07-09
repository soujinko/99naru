import express from 'express'
import multer from 'multer'
import postsRouter from './posts.js'
import commentsRouter from './comments.js'

const router = express.Router()

router.use(multer().none())
router.use('/api/posts', postsRouter)
router.use('/api/comments', commentsRouter)

export default router