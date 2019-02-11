const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const { GraphQLDateTime } = require('graphql-iso-date')

const dateScalarType = new GraphQLScalarType({
	name: 'Date',
	description: 'Date Custom Scalar Type',
	parseValue(value) {
		console.log("Parse: "+value)
		return new Date(value); // value from the client
	},
	serialize(value) {
		console.log("Serialize: "+value)
		return value.getTime(); // value sent to the client
	},
	parseLiteral(ast) {
		console.log("Literal: "+ast)
		if (ast.kind === Kind.INT) {
			return new Date(ast.value) // ast value is always in string format
		}
		return null;
	},
})

module.exports = {
	Date: GraphQLDateTime
}