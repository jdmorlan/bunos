---
id: getting-started
title: Getting Started
---

## Installation

```bash
npm install @bunos/{web-socket,ws-management-api,account-store-memory}
```

## Basic Usage

```js
const url = require('url');

const buildSocketServer = require('@bunos/web-socket');
const buildManagementApp = require('@bunos/ws-management-api');
const memoryStore = require('@bunos/account-store-memory');

const server = buildSocketServer({
  buildManagementApp,
  store: memoryStore(),
  getAccount: request => {
    const queryObject = url.parse(request.url, true).query;
    return Promise.resolve(queryObject.accountId);
  },
});

server.listen(8000, () => console.log('Listening'));
```
