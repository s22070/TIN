function checkPalindorme(string) {
    const length = string.length;
    for (let i = 0; i < length/2; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindorme("test"));
console.log(checkPalindorme("kajak"));