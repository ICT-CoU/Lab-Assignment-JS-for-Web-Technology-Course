// Write a JavaScript function to check whether a given value is hexadecimal value or not woth regular expression.

function isHexadecimal(val) {
    return /^[0-9A-F]+$/.test(val);
}

console.log(isHexadecimal('123ABC'));