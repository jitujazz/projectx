const { gql } = require('apollo-server-express')

const typeDefs = gql`

type Query{
	root: String
}

type Mutation {
	root: String
}

`

module.exports = typeDefs