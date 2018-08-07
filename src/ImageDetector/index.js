const { makePublisher } = require('amqp-simple-pub-sub')
const { exchange } = require('../constants')

const makeService = () => makePublisher({ exchange })

const start = async () => {
  const service = makeService()
  await service.start()
  return service
}

module.exports = { start }
