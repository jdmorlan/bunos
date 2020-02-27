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
const { Gateway } = require('@bunos/gateway');
const appPathModifier = require('@bunos/modifier-app-path');

const app = express();

app.use(auth()) // Your own auth middleware

const gateway = new Gateway();
gateway.useModifier(appPathModifier);

app.use(gateway.run)
```
