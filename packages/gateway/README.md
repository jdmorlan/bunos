# Gateway

Ability to proxy request based on modification rules
and application meta storage

## Installation

```
npm install @bunos/gateway
```

## Basic Usage

```
const express = require('express');
const { buildGateway } = require('@bunos/gateway');
const MemoryAppStore = require('@bunos/app-store-memory');
const appPathModifier = require('@bunos/modifier-app-path');

const app = express();

app.use(auth()) // Your own auth middleware

const gateway = buildGateway({
  appStore: new MemoryAppStore(),
  environment: 'stage' // wherever you store your production environment variable
});

gateway.useModifier(appPathModifier);

app.use(gateway.run)
```
