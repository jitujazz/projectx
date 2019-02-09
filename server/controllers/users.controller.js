const Users = require('../models/users')

var exportObj = {}

exportObj.getUsers = async() => await Users.find()

exportObj.addUser = async () => {
	// console.log('Yo buddy!')

	var result;
	var user = new Users
	user.name = "Jitendra Purohit"
	user.username = "jitujazz123"
	await user.save()
		.then((userRes) => {
			result = userRes
		})
		.catch((err) => {
			console.error("Error: " + err)
		})

	return result


	// return 'Yo Buddy!!!'
}

module.exports = exportObj