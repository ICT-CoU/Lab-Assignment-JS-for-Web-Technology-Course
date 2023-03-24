// Write a JavaScript function to check whether a given value is html or not wit regular expression.

function isHTML(value) {
  var regex = /<[a-z][\s\S]*>/i;
  return regex.test(value);
}


console.log(isHTML('<html><head><title>Sample site</title></head><body><p>This is a simple HTML document</p></body></html>'));