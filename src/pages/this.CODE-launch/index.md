---
title: this.CODE development
date: "2018-06-19T23:46:37.121Z"
---

We are getting close to launching =)

Turn any function into a curry function:

```javascript
var curryIt = function(functionToCurry) {
  var params = [...arguments].slice(1)
  return function() {
    return functionToCurry(...[...params, ...arguments])
  }
}
```
