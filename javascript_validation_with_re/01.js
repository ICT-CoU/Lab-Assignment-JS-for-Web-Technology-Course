// Write a JavaScript program to test the first character of a string is uppercase or not with reagular expression.

function isUpperCase(str) {
    return /^[A-Z]/.test(str);
}

console.log(isUpperCase('abc'));