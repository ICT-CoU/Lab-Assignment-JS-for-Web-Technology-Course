// Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character.

function replaceFirstDigit(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      return str.slice(0, i) + '$' + str.slice(i + 1)
    }
  }
  return str
}

console.log(replaceFirstDigit('abc1defg9'))