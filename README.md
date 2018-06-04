# competing-services-example

A simple example of how to use the AMQP-Simple-PubSub library to implement competing micro-services.

* `develop` — [CircleCI] [codecov]
* `master` — [CircleCI] [codecov]

## To Run

    docker-compose up -d

    npm start

## Development

### Prerequisites

* [NodeJS](htps://nodejs.org), version 10+ or better (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)
* [Docker](https://www.docker.com) (Use [Docker for Mac](https://docs.docker.com/docker-for-mac/), not the homebrew version)

### Initialisation

    npm install

### To Start the queue server for integration testing.

    docker-compose up -d

Runs Rabbit MQ.

`ctrl-c` to stop it.

### Test it

* `npm test` — runs the unit tests (quick and does not need rabbit mq running)

### Lint it

    npm run lint

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
