const { expect } = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { META_DATA_QUEUE } = require('../../../src/constants')

describe('ImageMetaData', () => {
  const mockGenericSubscriber = sinon.spy()
  const mockMakeHandler = sinon.spy()

  const _imageMetaData = proxyquire('../../../src/ImageMetaData', {
    '../genericSubscriber': mockGenericSubscriber,
    './makeHandler': mockMakeHandler
  })

  it('called genericSubscriber', () => {
    expect(mockGenericSubscriber).to.have.been.calledWith(
      META_DATA_QUEUE,
      mockMakeHandler
    )
  })
})
