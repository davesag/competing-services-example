const { expect } = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { exchange, routingKey } = require('../../src/constants')

describe('src/genericSubscriber', () => {
  const mockAMQP = {
    makeSubscriber: sinon.stub()
  }
  const fakeService = {
    start: sinon.stub()
  }

  const genericSubscriber = proxyquire('../../src/genericSubscriber', {
    'amqp-simple-pub-sub': mockAMQP
  })

  const queueName = 'test-queue'
  const fakeHandler = 'a handler'
  const makeHandler = sinon.stub()

  before(async () => {
    fakeService.start.resolves()
    makeHandler.returns(fakeHandler)
    mockAMQP.makeSubscriber.returns(fakeService)
    const { start } = genericSubscriber(queueName, makeHandler)
    await start('test')
  })

  it('called makeSubscriber', () => {
    expect(mockAMQP.makeSubscriber).to.have.been.calledWith(
      sinon.match({
        exchange,
        queueName,
        routingKeys: [routingKey]
      })
    )
  })

  it('called makeHandler', () => {
    expect(makeHandler).to.have.been.calledWith(fakeService, 'test')
  })

  it('called service.start', () => {
    expect(fakeService.start).to.have.been.calledWith(fakeHandler)
  })
})
