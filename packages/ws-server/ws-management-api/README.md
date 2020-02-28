# Socket Server Management Api

An express app that provides endpoints for managing the socket server.

## Publishing A Message

Publish a message to a specific account

`POST /publish`

```
{
  "account": {
    "id": 1
  },
  "payload": {
    "message": "hello"
  }
}
```

## Broadcasting A Message

Broadcast a message to all connected accounts

`POST /broadcast`

```
{
  "payload": {
    "message": "hello"
  }
}
```

## Viewing Connected Accounts

View all the connected accounts

`GET /`
