const gcd = require('./gcd');

function lcm(a, b) {
    return a * b / gcd(a,b);
}

module.exports = lcm;
