// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

function sortThreeNumbers(a, b, c) {
  if (a < b && a < c) {
    if (b < c) {
      return [a, b, c]
    } else {
      return [a, c, b]
    }
  } else if (b < a && b < c) {
    if (a < c) {
      return [b, a, c]
    } else {
      return [b, c, a]
    }
  } else {
    if (a < b) {
      return [c, a, b]
    } else {
      return [c, b, a]
    }
  }
}

alert(sortThreeNumbers(0, -1, 4))