// Write a JavaScript program to count number of words in string with regular expression.

function countWords(str) {
    return str.split(/\s+/).length;
}

console.log(countWords("Hi, I'm Saiful"));