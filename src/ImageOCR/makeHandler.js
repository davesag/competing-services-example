const makeHandler = (subscriber, name) => async message => {
  const data = JSON.parse(message.content.toString())
  console.log('OCR', name, data.text)
  // do service implementation.
  subscriber.ack(message)
}

module.exports = makeHandler
