# Adding a new Modifier

## Contract

- The `request` argument is the HTTP server request object
- The `modification` argument is result of all previous modifiers that have run

```
(request: object, modification: object): Promise<object>
```

## Examples

```
module.exports = () => async (request, modification) => {
  return { name: 'Jay' }
}
```

## Publishing the Package

You should add the following `keywords` to the package json for your
modifier.

```
"keywords": ["bunos", "modifier"]
```
