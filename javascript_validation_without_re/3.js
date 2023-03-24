// Write a JavaScript function to validate whether a given value type is char or not.

function isChar(val) {
    return typeof val === 'string' && val.length === 1;
}

console.log(isChar('a'));