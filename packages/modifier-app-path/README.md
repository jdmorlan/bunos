# Modifier App Path

Get application name from the url path of an incoming
request.

## Installation

```
npm install @bunos/modifier-app-path
```

## Basic Usage

```
const modifier = require('@bunos/modifier-app-path');
const modification = modifier(request);

console.log(modifcation) // { application: '' }
```

## Usage With Bunos Gateway

```
const { Gateway } = require('@bunos/gateway');
const appPathModifier = require('@bunos/modifier-app-path');

const gateway = new Gateway();
gateway.useModifier(appPathModifier);
```
