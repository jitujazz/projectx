const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')
const moment = require('moment')

const dateScalarType = new GraphQLScalarType({
	name: 'Date',
	description: 'Date Custom Scalar Type',
	parseValue(value) {
		console.log("Parse: "+value)
		return moment(value).toISOString(); // value from the client
	},
	serialize(value) {
		return moment(value).format("YYYY-MM-DD HH:mm:ss"); // value sent to the client
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
	Date: dateScalarType
}