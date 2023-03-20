// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function checkLeapYear(year) {
  if(year%4 == 0 && year%100 != 0 || year%400 == 0) {
    return true
  } else {
    return false
  }
}

console.log(checkLeapYear(1904))