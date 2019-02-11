const { gql } = require('apollo-server-express')

const typeDefs = gql`
scalar Date

extend type Query{
	getUsers: [User]
}

type User{
	_id: String,
	name: String,
	username: String,
	dateAdded: Date
}

extend type Mutation {
	addUser(name: String!): User
}

`

module.exports = typeDefs