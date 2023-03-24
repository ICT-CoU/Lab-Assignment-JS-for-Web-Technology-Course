// Write a JavaScript function to check a given value contains alpha, dash and underscore wit regular expression.

function isAlphaDashUnderscore(val) {
    return /^[a-zA-Z_-]+$/.test(val);
} 

console.log(isAlphaDashUnderscore('Saiful-_'));