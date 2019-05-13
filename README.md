# n-dimensional-random
An n-dimensional random number generator.

NPM:

```
npm install n-dimensional-random
```


Example:

```javascript
const RNG = require('rng.js');

const next = RNG(Date.now(), 2);

let rand1 = next(0, 0), rand2 = next(1, 14);
```
