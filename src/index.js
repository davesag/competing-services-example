const ImageDetector = require('./ImageDetector')
const ImageMetaData = require('./ImageMetaData')
const ImageOCR = require('./ImageOCR')

const { routingKey } = require('./constants')

let running = false

const start = async () => {
  const imageDetector = await ImageDetector.start()
  const listeners = await Promise.all([
    ImageMetaData.start('MetaData A'),
    ImageMetaData.start('MetaData B'),
    ImageOCR.start('OCR A'),
    ImageOCR.start('OCR B')
  ])
  return { imageDetector, listeners }
}

const run = async () => {
  const { imageDetector, listeners } = await start()
  const stop = async () => {
    console.log('stopping listeners')
    await Promise.all(listeners.map(s => s.close()))

    console.log('stopping image detector')
    await imageDetector.close()
  }
  const doShutdown = () => {
    // see https://en.wikipedia.org/wiki/POSIX_terminal_interface#Controlling_terminals_and_process_groups
    // SIGINT gets sent to all processes so check to see if we are running
    // before trying to shut down the connections.
    if (running) {
      running = false
      console.log('\nClosing down all microservices')
      stop()
        .then(() => {
          process.exit(0)
        })
        .catch(err => {
          console.error(err)
          process.exit(1)
        })
    }
  }

  let count = 0

  setInterval(async () => {
    const message = JSON.stringify({
      text: `This is message ${count}`,
      meta: `This is meta-data for ${count}`
    })
    await imageDetector.publish(routingKey, message)
    count += 1
  }, 5000)

  process.on('SIGINT', doShutdown)
  running = true
}

run()
  .then(() => {
    console.log('Services running. Expect a new message every 5 seconds.')
  })
  .catch(err => {
    console.error(err)
  })
