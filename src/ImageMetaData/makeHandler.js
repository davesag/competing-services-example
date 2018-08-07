const makeHandler = (subscriber, name) => async message => {
  const data = JSON.parse(message.content.toString())
  console.log('Meta Data', name, data.meta)
  // do service implementation.
  subscriber.ack(message)
}

module.exports = makeHandler
