---
title: You just got to understand this...
date: "2018-06-19T23:46:37.121Z"
---

#Introduction
With the new name (this.CODE), I found it fitting to dive into the magical **this** keyword in javascript.

To best demonstrate how **this** works, I think we should look at how .call(), apply() & .bind() work.

##Consider this code:

```javascript
// OBJECTS
var human = {
  name: 'Gissur Simonarson',
  life: 100,
}

var ogre = {
  name: 'Ogre McOgreson',
  life: 150,
}

// FUNCTIONS
function characterHit(hpTaken, additionalCritHp) {
  return this.life - hpTaken - additionalCritHp
}

// RESULTS
var hitpoints = 10
var criticalHP = 5
console.log(characterHit.call(human, hitpoints, criticalHP))
console.log(characterHit.apply(ogre, [hitpoints, criticalHP]))

const personHit = characterHit.bind(human)
const ogreHit = characterHit.bind(ogre)

console.log(personHit(hitpoints, criticalHP))
console.log(ogreHit(hitpoints, criticalHP))
```

As you can see above, we only have **this** appearing once. However, depending on how we call, apply or bind the function, **this** will be different objects.
