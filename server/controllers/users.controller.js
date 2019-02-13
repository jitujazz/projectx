const Users = require('../models/users')

let exportObj = {}

// exportObj.getUsers = async() => await Users.find()

exportObj.addUser = async ({ social_auth, social_id, name, username, profile_picture }) => {

	var result;
	let user = new Users
	user.social_auth = social_auth
	user.social_id = social_id
	user.name = name
	user.username = username
	user.profile_picture = profile_picture

	result = await user.save()
	return result
}

exportObj.getUserByUsername = async (username) => await Users.findOne({username})

exportObj.getUserById = async (user_id) => await Users.findById(user_id)

module.exports = exportObj