// The comma operator in JavaScript is used to combine multiple expressions into a single expression. It allows you to include multiple statements where only one statement is expected. 

// expression1, expression2, expression3, ..., expressionN;
// The expressions are evaluated from left to right.
// The result of the entire expression is the result of the rightmost expression.
//example
let x = 1, y = 2, z = 3;
// The comma operator is used to combine multiple expressions
let result = (x++, y++, z++);
console.log(result);  
console.log(x);       
console.log(y);       
