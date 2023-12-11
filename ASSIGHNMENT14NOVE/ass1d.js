/*Precedence:
Precedence refers to the priority or order in which operators are evaluated in an expression.
Higher precedence operators are evaluated first.
JavaScript has a set of rules that determine the precedence of different operators.
For example, in the expression a + b * c, the multiplication (*) has higher precedence than the addition (+), so b * c is evaluated first. */
let result = a + b * c; // Multiplication has higher precedence than addition

/*Associativity:

Associativity defines the order in which operators of the same precedence are executed.
It can be left-to-right or right-to-left.
For example, the addition operator (+) is left-associative, meaning it is evaluated from left to right. In the expression a + b + c, the addition is performed left to right. */
let result1 = a + b + c; // Left-associative, evaluated as (a + b) + c
a = b = c; // Right-associative, evaluated as a = (b = c)
/*Importance:
Predictable Execution:
1.Understanding precedence and associativity ensures that expressions are evaluated in a predictable manner. This is crucial for writing code that behaves as intended.

2.Code Readability:
Code that follows a clear order of evaluation is more readable and maintainable. It reduces the chances of errors and makes it easier for other developers to understand the code.

3.Avoiding Unnecessary Parentheses:
Knowing the precedence of operators helps you write concise code by avoiding unnecessary parentheses. It allows you to rely on the default order of evaluation.

4.Debugging:
When unexpected behavior occurs in your code, knowing operator precedence and associativity helps you identify and fix issues related to how expressions are evaluated. */