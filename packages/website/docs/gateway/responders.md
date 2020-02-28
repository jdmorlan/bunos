---
id: responders
title: Responders
---

## What's A Responder

The responder manages all the various ways a proxy response can be generated.

- HTTP Proxy
- GCP Cloud Storage
- S3 Buckets

## Available Responders

- [HTTP Proxy](https://git.eogresources.com/jmorlan/gateway/packages/responder-http)
- [GCP Storage](https://git.eogresources.com/jmorlan/gateway/packages/responder-gcp-bucket)

<!-- prettier-ignore -->
:::note Missing Responder
Submit a PR in the [Gateway](https://git.eogresources.com/jmorlan/gateway) repo
:::

## Writing Your Own Modifier

### Contract

```ts
type RunOptions {
  application: Application;
  modification: object;
  request: HTTPRequest
  response: HTTPResponse
}

interface IResponder {
  get key(): string
  run(opts: RunOptions): void
}
```
