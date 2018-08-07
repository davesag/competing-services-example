const exchange = 'IMAGE-ANALYSIS'
const routingKey = 'image.detected'

const OCR_QUEUE = 'OCR'
const META_DATA_QUEUE = 'META-DATA'

module.exports = {
  exchange,
  routingKey,
  OCR_QUEUE,
  META_DATA_QUEUE
}
