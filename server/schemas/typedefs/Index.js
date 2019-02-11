const user = require('./User')
const auth = require('./Auth')
const root = require('./Root')

const schemaArray = [root, user, auth]

module.exports = schemaArray