// Write a JavaScript program to check a credit card number with regular expression.

function isCreditCardNumber(val) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(val);
}

console.log(isCreditCardNumber('1234-5678-9012-3456'));