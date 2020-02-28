# Adding New Responder

A responder is a function that takes the modification built by the
modifier chain and sends a response back to the client that made
the request.

Make sure that a current responder does not exist that does what
you need it to do.

## Contract

```
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

For reference, checkout the [HTTP Responder](../packages/responder-http/src/index.js)
