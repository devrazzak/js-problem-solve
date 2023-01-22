function isPositive(a) {
    if (Math.sign(a) === -1) {
        return "Negative Error";
    } else if (Math.sign(a) === 0) {
        return "Zero Error";
    } else {
        return "YES";
    }
}
console.log(isPositive(0));
