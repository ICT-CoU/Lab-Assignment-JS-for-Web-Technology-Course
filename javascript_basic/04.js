// Write a JavaScript program to compute the sum of all digits that occur in a given string.

function sumOfDigits(str) {
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      sum += parseInt(str[i])
    }
  }
  return sum
}

console.log(sumOfDigits('12abc20yz68'))