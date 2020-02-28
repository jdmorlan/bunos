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

const { buildGateway } = require('@bunos/gateway');
const MemoryAppStore = require('@bunos/app-store-memory');
const appPathModifier = require('@bunos/modifier-app-path');
const HTTPResponder = request('@bunos/responder-http')'

const server = buildGateway({
  appStore: new MemoryAppStore(),
  environment: 'stage',
  modifiers: [appPathModifier],
  responders: [HttpResponder]
});

const app = express();
app.use(gateway.run);

app.listen(4000, () => `Gateway listening on port: 4000`);
```
