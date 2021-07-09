import express from 'express'

const router = express.Router()

router.put('/:postId', (req, res, next) => {
	const { postId } = req.params
})
router.delete('/:postId', (req, res, next) => {
	const { postId } = req.params
})
router.get('/', (req, res, next) => {
	const { post } = req.body
})
router.post('/', (req, res, next) => {
	const { post } = req.body
})
export default router