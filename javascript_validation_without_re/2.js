// Write a JavaScript function to validate whether a given value is RegExp or not.

function isRegExp(val) {
    return val instanceof RegExp;
}

console.log(isRegExp(/w3resource/));