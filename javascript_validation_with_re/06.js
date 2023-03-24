// Write a JavaScript function to check whether a given value is alpha numeric or not with regular expression.

function isAlphaNumeric(val) { 
    return /^[a-zA-Z0-9]+$/.test(val);
}

console.log(isAlphaNumeric('Saiful42'));