const repeat = (n, e) => Array(n).fill(e);
const range = n => Array(n).fill(0).map((_, i) => i);

const fract = f => f % 1;

const dot = (arr1, arr2) => arr1.reduce((a, c, i) => a + c * arr2[i], 0);

const RNG = function (seed, dimension) {
    const vec = range(dimension).map(x =>
        fract(Math.sin((seed + x + .5) * 12.9898) * 43758.5453123)
    );

    return (...point) => fract(Math.abs(Math.sin(dot(point, vec))) * 43758.5453123);
};

module.exports = RNG;