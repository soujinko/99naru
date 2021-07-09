import express from 'express'

const router = express.Router()

router.put('/:commentId', (req, res, next) => {

})
router.delete('/:commentId', (req, res, next) => {
	// dont' actually delete the comment from db but set isDelete true
	// By deleting the comment, it may cause descendant comments to be orphans
})
router.get('/', (req, res, next) => {

})
router.post('/', (req, res, next) => {

})
export default router