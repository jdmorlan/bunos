# Modifier Query String Branch

Get branch name from query-string to support feature
branch proxying

## Installation

```
npm install @bunos/modifier-branch
```

## Basic Usage

```
const modifier = require('@bunos/modifier-branch');
const modification = modifier(request);

console.log(modifcation) // { branch: '' }
```

## Usage With Bunos Gateway

```
const { Gateway } = require('@bunos/gateway');
const qsBranchModifier = require('@bunos/modifier-branch');

const gateway = new Gateway();
gateway.useModifier(qsBranchModifier);
```
