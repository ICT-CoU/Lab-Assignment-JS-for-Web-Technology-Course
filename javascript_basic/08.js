// Write a JavaScript program to find the kth greatest element of a given array of integers

function kthGreatest(arr, k) {
  arr.sort((a, b) => a-b)
  return arr[k-1]
}

console.log(kthGreatest([1, 2, 6, 4, 5], 3))