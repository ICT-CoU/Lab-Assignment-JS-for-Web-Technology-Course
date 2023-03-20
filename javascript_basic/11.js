// Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

function gcd(a, b) {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

console.log(gcd(8, 12))