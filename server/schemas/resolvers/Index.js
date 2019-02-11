const User = require('./User')
const CustomScalar = require('./CustomScalar')

const resolvers = {
	Query: {
		...User.Query
	},
	Mutation: {
		...User.Mutation
	},
	...CustomScalar
}

module.exports = resolvers