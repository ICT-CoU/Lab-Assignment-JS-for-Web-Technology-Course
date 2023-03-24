// Write a JavaScript function to validate whether a given value type is NaN or not.

function isNan(val) {
    return val !== val;
}

console.log(isNan(NaN));