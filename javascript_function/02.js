// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function capitalize(str) {
    var arr = str.split(' ');
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(' ');
}

console.log(capitalize('the quick brown fox'));