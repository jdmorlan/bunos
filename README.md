# Gateway

A collection of components that provide a dynamic gateway proxy server.

## Basic Usage

```
const express = require('express');

const { buildGateway } = require('@bunos/gateway');
const MemoryAppStore = require('@bunos/app-store-memory');
const appPathModifier = require('@bunos/modifier-app-path');
const HTTPResponder = request('@bunos/responder-http')'

const gateway = buildGateway({
  appStore: new MemoryAppStore(),
  environment: 'stage',
  modifiers: [appPathModifier],
  responders: [HTTPResponder]
});

const app = express();
app.use(gateway.run);

app.listen(4000, () => `Gateway listening on port: 4000`);
```

## Packages

### General

- [Gateway](packages/gateway/README.md)
- [GraphQL Server](packages/app-store-graphl/README.md)

## Stores

- [Adding New Store](docs/app-store.md)
- [Memory Store](packages/app-store-memory/README.md)

### Modifiers

- [Adding New Modifier](docs/modifier.md)
- [App Path Modifier](packages/modifier-app-path/README.md)
- [Branch Query String](packages/modifier-branch/README.md)

### Responders

- [Adding New Responder](docs/responder.md)
- [HTTP Proxy](packages/responder-http/README.md)
- [GCP Cloud Storage](packages/responder-gcp-bucket/README.md)
