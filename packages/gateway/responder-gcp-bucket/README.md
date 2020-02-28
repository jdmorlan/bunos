# HTTP Proxy Responder

Proxy requests through an HTTP proxy

## Installation

```
npm install @bunos/responder-gcp-bucket
```

## Basic Usage

```
const BucketResponder = require('@bunos/responder-gcp-bucket');

const responder = new BucketResponder();
console.log(responder.key) // 'GCP_BUCKET'

responder.run({ request, response, target })
```

## Usage With Gateway

```
const { Gateway } = require('@bunos/gateway');
const BucketResponder = require('@bunos/responder-gcp-bucket');

const gateway = new Gateway();
gateway.useResponder(BucketResponder);
```
