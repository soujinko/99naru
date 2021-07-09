import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
	text: {
		type: String,
		require: true
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	comments: [
	// Subdocument can hold up to 16MB, which is about 68,000 100-character comments
	// Thus it's safe to use here
	]
})

export default mongoose.model('Post', postSchema)
