// Write a JavaScript program to find the number of elements which presents in both of the given arrays.

function findCommonElements(arr1, arr2) {
  let count = 0
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++
      }
    }
  }
  return count
}

console.log(findCommonElements([1, 2, 3, 4], [1, 2, 3, 4]))