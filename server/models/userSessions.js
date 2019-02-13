const mongoose = require('mongoose')

const userSessionsSchema = new mongoose.Schema({
	user_id: String,
	isDeleted: { type: Boolean, default: false },
	dateAdded: { type: 'Date', default: Date.now, required: true },
	dateDeleted: { type: 'Date' },
})

module.exports = mongoose.model('usersessions', userSessionsSchema)