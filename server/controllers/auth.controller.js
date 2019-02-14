const axios = require('axios')
const querystring = require('querystring')
const UserController = require('./users.controller')
const UserSessions = require('../models/userSessions')

var exportObj = {}

exportObj.instaAuth = async (code, redirect_uri) => {
	
	var result
	const client_id = "0054c29f99da4c4bb106ab043097017f"
	const client_secret = "0052b0e726554d51bb5d0824d1ec0856"
	const grant_type = "authorization_code"

	let instaData = await axios.post('https://api.instagram.com/oauth/access_token', querystring.stringify({
		client_id,
		client_secret,
		grant_type,
		redirect_uri,
		code
	}))

	const { access_token, user: { username, profile_picture, full_name, id } } = instaData.data
	
	let userDetails = await UserController.getUserByUsername(username)

	if(userDetails === null)
	{
		userDetails = await UserController.addUser({
			social_auth: 'Instagram',
			social_id: id,
			name: full_name,
			username,
			profile_picture
		})
	}
	else
	{
		await clearSession(userDetails._id)
	}

	let session_id = await createSession(userDetails._id, access_token)

	result = {
		token: session_id,
		user: userDetails
	}

	// console.log(result)
	return result
}

const createSession = async (user_id, access_token) => {
	let usersessions = new UserSessions
	usersessions.user_id = user_id
	usersessions.token = access_token
	let session = await usersessions.save()
	return session._id
}

const clearSession = async (user_id) => {
	await UserSessions.updateOne({ user_id, isDeleted: false }, { isDeleted: true, dateDeleted: Date.now() })
	return true;
}

exportObj.verifyToken = async (token) => {
	let session = await UserSessions
		.findOne({
			_id: token,
			isDeleted: false
		})
	if(session !== null)
	{
		let user = await UserController.getUserById(session.user_id)
		if(user !== null)
			return user
		else
			throw new Error("User Does Not Exists!")
	}
	else
		throw new Error("No Token Present or Expired!")
}

module.exports = exportObj