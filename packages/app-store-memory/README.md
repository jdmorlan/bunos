# App Store - Memory

Simple memory storage for app metadata

Please note that this should not be used in a production environment and is
intended to be used for testing purposes

## Installation

```
npm install @bunos/app-store-memory
```

## Basic Usage

```
const MemoryAppStore = require('@bunos/app-store-memory');

const store = new MemoryAppStore();

const { application } = await store.add({});
const { application } = await store.get('some id');
const { application } = await store.search({ name: 'eog', environment: 'stage' })
```
