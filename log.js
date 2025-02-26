function log(a) {
    if (a <= 0) {
        throw new Error("Input must be a positive number");
    }
    if (a === 1) {
        return 0;
    }

    const LN2 = 0.6931471805;
    let intPart = 0;

    while (a >= 2) {
        a /= 2;
        intPart++;
    }

    a -= 1;
    let result = 0;
    let temp = 1;

    for (let i = 1; i <= 21; i++) {
        temp *= a;
        if (i % 2 === 0) {
            result -= temp / i;
        } else {
            result += temp / i;
        }
    }

    return result + intPart * LN2;
}

module.exports = log;
