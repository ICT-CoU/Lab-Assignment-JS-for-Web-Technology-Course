// Write a JavaScript function to count the number of vowels in a given string with regular expression.

function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
}

console.log(countVowels('Hi, I\'m Saiful'));