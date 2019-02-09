const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: String,
	username: String,
	dateAdded: { type: 'Date', default: Date.now, required: true },
})

module.exports = mongoose.model('Users', userSchema)