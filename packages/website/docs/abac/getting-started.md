---
id: getting-started
title: Access Control
---

## Installation

```bash
npm install @bunos/access-control
```

## Basic Usage

```
const { AccessControl, MemoryPolicyStore } = require('@bunos/access-control');

const policy = {
  resource: 'activity',
  action: 'create',
  conditions: [
    {
      type: "EQUALS",
      params: [
        { type: "CONSTANT", value: "admin" },
        { type: "JSONPATH", value: "$.user.role" }
      ]
    },
    {
      type: "EQUALS",
      params: [
        { type: "JSONPATH", value: "$.resource.owner" },
        { type: "JSONPATH", value: "$.user.username" }
      ]
    }
  ]
}

const ac = new AccessControl({
  store: MemoryPolicyStore,
  storeOptions: { policies: [policy] }
});

const user = { username: 'jdmorlan', role: 'admin' };
const activity = { owner: 'jdmorlan' };

const permission = await ac.can(user).execute('create').on('activity', activity);

console.log(permission.granted) // true
```
