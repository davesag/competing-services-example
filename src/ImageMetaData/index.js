const genericSubscriber = require('../genericSubscriber')
const makeHandler = require('./makeHandler')
const { META_DATA_QUEUE: queueName } = require('../constants')

module.exports = genericSubscriber(queueName, makeHandler)
