// loading of global module - use require keyword. 
var fs = require('fs') ; 

var input = fs.readFileSync(process.argv[2]) ; 

// breaking input into smaller arrays of text 
var processInput = input.toString().split('\n') ; 
console.log(processInput.length-1) ; 