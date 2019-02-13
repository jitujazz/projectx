const { gql } = require('apollo-server-express')

const typeDefs = gql`

type AuthPayload{
	token: String,
	user: User
}

extend type Query{
	verifyToken(token: String!): User
}

extend type Mutation{
	instaAuth(code: String!, redirect_uri: String!): AuthPayload
}

`

module.exports = typeDefs