// Certainly! The ternary operator is a concise way to write conditional statements in JavaScript. It is often used when you want to assign a value to a variable or execute a statement based on a certain condition.

//  condition ? expression_if_true : expression_if_false;
// example
// Function to check whether a number is even or odd using the ternary operator
function checkEvenOrOdd(number) {
    const result = number % 2 === 0 ? "Even" : "Odd";
    return result;
  }
  console.log(checkEvenOrOdd(8));  // Output: Even
  console.log(checkEvenOrOdd(15)); // Output: Odd
  console.log(checkEvenOrOdd(0));  // Output: Even
  
