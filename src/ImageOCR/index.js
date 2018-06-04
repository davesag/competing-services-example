const { makeSubscriber } = require('amqp-simple-pub-sub')

const makeHandler = require('./makeHandler')
const { exchange, routingKey, OCR_QUEUE: queueName } = require('../constants')

const routingKeys = [routingKey]

const makeService = () => makeSubscriber({ exchange, queueName, routingKeys })

const start = async name => {
  const service = makeService()
  const handler = makeHandler(service, name)
  await service.start(handler)
  return service
}

module.exports = { start }
