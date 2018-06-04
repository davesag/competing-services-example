const { expect } = require('chai')
const sinon = require('sinon')
const proxyquire = require('proxyquire')
const { OCR_QUEUE } = require('../../../src/constants')

describe('ImageOCR', () => {
  const mockGenericSubscriber = sinon.spy()
  const mockMakeHandler = sinon.spy()

  const imageOCR = proxyquire('../../../src/ImageOCR', {
    '../genericSubscriber': mockGenericSubscriber,
    './makeHandler': mockMakeHandler
  })

  it('called genericSubscriber', () => {
    expect(mockGenericSubscriber).to.have.been.calledWith(
      OCR_QUEUE,
      mockMakeHandler
    )
  })
})
