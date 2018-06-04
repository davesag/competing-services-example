const { expect } = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { exchange } = require('../../../src/constants')

describe('ImageMetaData', () => {
  const mockAMQP = {
    makeSubscriber: sinon.stub()
  }
  const fakeSubscriber = {
    start: sinon.stub()
  }
  const fakeService = 'a fake service'

  const { start } = proxyquire('../../../src/ImageMetaData', {
    'amqp-simple-pub-sub': mockAMQP
  })

  describe('start', () => {
    before(async () => {
      fakeSubscriber.start.resolves(fakeService)
      mockAMQP.makeSubscriber.returns(fakeSubscriber)
      await start('test')
    })

    it('called makeSubscriber', () => {
      expect(mockAMQP.makeSubscriber).to.have.been.calledWith(
        sinon.match({
          exchange
        })
      )
    })

    it('called start', () => {
      expect(fakeSubscriber.start).to.have.been.calledOnce
    })
  })
})
