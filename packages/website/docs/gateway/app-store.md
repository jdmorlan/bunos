---
id: app-store
title: Application Target Store
---

## Prerequisites

You should install `@bunos/gw-application`

## Contract

```
type ApplicationResponse {
  found: boolean;
  application: Application
}

interface {
  add(app: Application): ApplicationResponse;
  get(id: string): ApplicationResponse
  match(filter: ApplicationFilter): ApplicationResponse
  search(filter: ApplicationFilter): [ApplicationResponse]
}
```

The `found` value for the `match` function should return `false` if more than one applications are found.
