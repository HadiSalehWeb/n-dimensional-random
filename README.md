# n-dimensional-random
An n-dimensional random number generator.

###NPM

```
npm install n-dimensional-random
```


###Example

```javascript
const RNG = require('rng.js');

const next2 = RNG(Date.now(), 2), next3 = RNG(Date.now(), 3);

console.log(next2(1, 2));//a random number between 0 and 1
console.log(next3(1, 2, 3));//a random number between 0 and 1
```
