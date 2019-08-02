const { expect } = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { exchange } = require('../../../src/constants')

describe('ImageDetector', () => {
  const mockAMQP = {
    makePublisher: sinon.stub()
  }
  const fakePublisher = {
    start: sinon.stub()
  }
  const fakeService = 'a fake service'

  const { start } = proxyquire('../../../src/ImageDetector', {
    'amqp-simple-pub-sub': mockAMQP
  })

  describe('start', () => {
    before(async () => {
      fakePublisher.start.resolves(fakeService)
      mockAMQP.makePublisher.returns(fakePublisher)
      await start()
    })

    it('called makePublisher', () => {
      expect(mockAMQP.makePublisher).to.have.been.calledWith(
        sinon.match({
          exchange
        })
      )
    })

    it('called start', () => {
      expect(fakePublisher.start).to.have.been.calledOnce
    })
  })
})
