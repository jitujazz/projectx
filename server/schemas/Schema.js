const { gql } = require('apollo-server-express')

const typeDefs = gql`
scalar Date

type Query{
	"Commenting Example"
	getUsers: [User]
}

type User{
	_id: String,
	name: String,
	username: String,
	dateAdded: Date
}

type Mutation {
	addUser(name: String!): User
}

`

module.exports = typeDefs