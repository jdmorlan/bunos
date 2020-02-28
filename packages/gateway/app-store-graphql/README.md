# App Store - GraphQL

A graphQL server to manage app store information

## Installation

```
npm install @bunos/app-store-graphql
```

## Basic Usage

```
const express = require('express');
const buildServer = require('@bunos/app-store-graphql');
const MemoryAppStore = require('@bunos/app-store-memory');

const app = express();
const server = buildServer({ appStore: new MemoryAppStore() });
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log('GraphQL Server running on port 4000');
})
```
