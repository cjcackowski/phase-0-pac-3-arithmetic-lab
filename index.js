function add(a, b){
return a + b
}
function subtract(a, b){
  return a - b  
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}


//increment decrement functions
let number = 10;

function increment(number) {
  return (number += 1);
}

function decrement(number) {
  return (number -= 1);
}

// Example usage
console.log(increment(number)); //=> 11
console.log(decrement(number)); //=> 9


//make integer and preserve decimal function
function makeInt(string) {
    return parseInt(string, 10);
  }
  
  function preserveDecimal(string) {
    return parseFloat(string);
  }
  
  // Example usage
  console.log(makeInt("42"));          //=> 42
  console.log(preserveDecimal("3.14")); //=> 3.14