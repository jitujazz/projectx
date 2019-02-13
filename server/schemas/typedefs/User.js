const { gql } = require('apollo-server-express')

const typeDefs = gql`
scalar Date

type User{
	_id: String,
	name: String,
	username: String,
	profile_picture: String,
	dateAdded: Date
}

`

module.exports = typeDefs