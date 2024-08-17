// Function to check if a number is positive, negative, or zero using a nested ternary operator
function checkNumberType(number) {
    const result =
      number > 0
        ? "positive"
        : number < 0
        ? "negative"
        : "zero";
  
    return result;
  }
    console.log(checkNumberType(5));   // Output: positive
  console.log(checkNumberType(-8));  // Output: negative
  console.log(checkNumberType(0));   // Output: zero
  