# HTTP Proxy Responder

Proxy requests through an HTTP proxy

## Installation

```
npm install @bunos/responder-http
```

## Basic Usage

```
const HTTPResponder = require('@bunos/responder-http');

const responder = new HTTPResponder();
console.log(responder.key) // 'SERVER'

responder.run({ request, response, target })
```

## Usage With Gateway

```
const { Gateway } = require('@bunos/gateway');
const HTTPResponder = require('@bunos/responder-http');

const gateway = new Gateway();
gateway.useResponder(HTTPResponder);
```
