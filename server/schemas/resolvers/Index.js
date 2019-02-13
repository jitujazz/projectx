const User = require('./User')
const Auth = require('./Auth')
const CustomScalar = require('./CustomScalar')

const resolvers = {
	Query: {
		...User.Query,
		...Auth.Query
	},
	Mutation: {
		...User.Mutation,
		...Auth.Mutation
	},
	...CustomScalar
}

module.exports = resolvers