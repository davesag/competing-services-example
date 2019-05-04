# competing-services-example

A simple example of how to use the [`amqp-simple-pub-sub`](https://github.com/davesag/amqp-simple-pub-sub) library to implement competing micro-services.

[![Greenkeeper badge](https://badges.greenkeeper.io/davesag/competing-services-example.svg)](https://greenkeeper.io/)

<!-- prettier-ignore -->
| Branch | Status | Coverage | Notes |
| ------ | ------ | -------- | ----- |
| `develop` | [![CircleCI](https://circleci.com/gh/davesag/competing-services-example/tree/develop.svg?style=svg)](https://circleci.com/gh/davesag/competing-services-example/tree/develop) |  [![codecov](https://codecov.io/gh/davesag/competing-services-example/branch/develop/graph/badge.svg)](https://codecov.io/gh/davesag/competing-services-example) | Work in progress |
| `master` | [![CircleCI](https://circleci.com/gh/davesag/competing-services-example/tree/master.svg?style=svg)](https://circleci.com/gh/davesag/competing-services-example/tree/master) |  [![codecov](https://codecov.io/gh/davesag/competing-services-example/branch/master/graph/badge.svg)](https://codecov.io/gh/davesag/competing-services-example) | Latest release |

## See Also

- [itnext.io/connecting-competing-microservices-using-rabbitmq](https://itnext.io/connecting-competing-microservices-using-rabbitmq-28e5269861b6)
- [`amqp-simple-pub-sub`](https://github.com/davesag/amqp-simple-pub-sub)
- [`amqp-delegate`](https://github.com/davesag/amqp-delegate)

## To Run

Clone this repo to your local machine, then, from within the project folder:

```
docker-compose up -d

npm start
```

You can `crtl-c` when you get tired of watching it.

## Development

### Prerequisites

- [NodeJS](htps://nodejs.org), version 10.15.3 (LTS) or better (I use [`nvm`](https://github.com/creationix/nvm) to manage Node versions — `brew install nvm`.)
- [Docker](https://www.docker.com) (Use [Docker for Mac](https://docs.docker.com/docker-for-mac/), not the homebrew version)

### Initialisation

```
npm install
```

### To Start the queue server for integration testing.

```
docker-compose up -d
```

Runs Rabbit MQ.

`ctrl-c` to stop it.

### Test it

- `npm test` — runs the unit tests (quick and does not need `rabbitmq` running)

### Lint it

```
npm run lint
```

## Contributing

Please see the [contributing notes](CONTRIBUTING.md).
