const { makeSubscriber } = require('amqp-simple-pub-sub')

const { exchange, routingKey } = require('./constants')

const genericSubscriber = (queueName, makeHandler) => {
  const routingKeys = [routingKey]

  const makeService = () => makeSubscriber({ exchange, queueName, routingKeys })

  const start = async name => {
    const service = makeService()
    const handler = makeHandler(service, name)
    await service.start(handler)
    return service
  }

  return { start }
}

module.exports = genericSubscriber
