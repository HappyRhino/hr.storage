hr.storage [![Build Status](https://travis-ci.org/HappyRhino/hr.storage.png?branch=master)](https://travis-ci.org/HappyRhino/hr.storage)
=============================

> Local storage and caching utility for HappyRhino

## Installation

```
$ npm install hr.storage
```

## Documentation

#### Read/Write localstorage

```js
var storage = require("hr.storage");

// Read a value from storage
storage.get("hello");

// Write a value in storage
storage.set("hello", "world");

// JSON-Serializable object can be used
storage.set("hello", { message: "World" });
```

#### Cache

```js
var Cache = require("hr.cache").Cache;

var cache = new Cache({
    namespace: "files"
});

// Set a value
cache.set("README.md", { content: "File content "}, 60*1000);
```
