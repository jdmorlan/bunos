---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation

```bash
npm install @bunos/{gateway,app-store-memory,modifier-app-path,responder-http}
```

## Basic Usage

```js
const express = require('express');

const {buildGateway} = require('@bunos/gateway');
const MemoryAppStore = require('@bunos/app-store-memory');
const appPathModifier = require('@bunos/modifier-app-path');
const HTTPResponder = require('@bunos/responder-http');

const store = new MemoryAppStore({
  apps: [
    {
      id: 12345,
      name: 'docs',
      environment: 'stage',
      target: {
        type: 'SERVER',
        url: 'http://localhost:5001',
      },
    },
  ],
});

const gateway = buildGateway({
  appStore: new MemoryAppStore({apps: [appTarget]}),
  environment: 'stage',
  modifiers: [appPathModifier],
  responders: [new HTTPResponder()],
});

const app = express();
app.use(gateway.run);

app.listen(4001, () => `Gateway listening on port: 4001`);
```
