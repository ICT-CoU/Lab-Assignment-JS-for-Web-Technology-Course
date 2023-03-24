// Write a JavaScript function to get the number of occurrences of each letter in specified string.

function countLetters(str) {
    var arr = str.split('');
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    return obj;
}

console.log(countLetters('thequickbrownfoxjumpsoverthelazydog'));