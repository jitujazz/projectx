const AuthController = require('../../controllers/auth.controller')

const resolvers = {
	Query: {
		verifyToken: async (root, { token }) => {
			return await AuthController.verifyToken(token)
		}
	},
	Mutation: {
		instaAuth: async (root, { code, redirect_uri }) => {
			return await AuthController.instaAuth(code, redirect_uri)
		},
	}
};

module.exports = resolvers