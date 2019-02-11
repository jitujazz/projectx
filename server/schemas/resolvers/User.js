const PostController = require('../../controllers/users.controller')

const resolvers = {
	Query: {
		getUsers: () => PostController.getUsers()
	},
	Mutation: {
		addUser: async (root, { name, username }) => {
			return await PostController.addUser(name, username)
		},
	}
};

module.exports = resolvers