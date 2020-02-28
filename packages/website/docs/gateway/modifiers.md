---
id: modifiers
title: Modifiers
---

## Whats a modifier

The modifier manages a collection of functions that ultimately build a metadata object that is used to find an `ApplicationTarget` so we can proxy a response for the gateway.

## Available Modifiers

- [App Path](https://git.eogresources.com/jmorlan/gateway/packages/modifier-app-path)
- [Feature Branch - Query String](https://git.eogresources.com/jmorlan/gateway/packages/modifier-branch)

<!-- prettier-ignore -->
:::note Missing Modifier
Submit a PR in the [Gateway](https://git.eogresources.com/jmorlan/gateway) repo
:::

## Writing Your Own Modifier

### Contract

```ts
(request: HTTPRequest, modification: object): Promise<object>
```

### Example

```js
module.exports = opts => (request, modification) => {
  return Promise.resolve({name: 'Jay'});
};
```
