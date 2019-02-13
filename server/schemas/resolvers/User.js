const UserController = require('../../controllers/users.controller')

const resolvers = {
	Query: {
		// getUsers: () => UserController.getUsers()
	},
	Mutation: {
		/*addUser: async (root, args) => {
			return await UserController.addUser(args)
		},*/
	}
};

module.exports = resolvers