const { gql } = require('apollo-server-express')

const typeDefs = gql`

extend type Query{
	instaAuth(token: String!): User
}

`

module.exports = typeDefs