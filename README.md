```
const express = require('express');
const { Gateway } = require('@bunos/gateway');

const app = express();
const gateway = new Gateway();

// Register Modifiers
gateway.useModifier(appPathModifier);

// Register Responders
gateway.useResponder(httpResponder);
gateway.useResponder(gcpBucketResponder);

app.use(gateway.run);
```
