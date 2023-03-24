// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(str) {
    var arr = str.split(' ');
    var longest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

console.log(longestWord('Web Development Tutorial'));