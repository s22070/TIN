const getSilnia = function(value) {
    if (value === 0) {
        return 1;
    } else {
        return value * getSilnia(value - 1);
    }
};

function silnia(value) {
    if (value <= 1) {
        return 1;
    }
    let tmp = 1;
    for (let i = 2; i <= value; i++) {
        tmp *= i;
    }
    return tmp;
}
console.log("Silnia rekurencyjnie: ")
console.log(getSilnia(1));
console.log(getSilnia(2));
console.log(getSilnia(3));
console.log("Silnia iteracyjnie: ")
console.log(silnia(1));
console.log(silnia(2));
console.log(silnia(3));