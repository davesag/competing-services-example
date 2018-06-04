const genericSubscriber = require('../genericSubscriber')
const makeHandler = require('./makeHandler')
const { OCR_QUEUE: queueName } = require('../constants')

module.exports = genericSubscriber(queueName, makeHandler)
