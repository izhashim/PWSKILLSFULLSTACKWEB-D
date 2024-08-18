/*Callbacks

A callback is a function that is passed as an argument to another function, and is executed by that function at a later time. In the context of asynchronous programming, callbacks are often used to handle the result of an asynchronous operation. */
//Example
asyncFunction(param, function(result) {
    console.log(result);
  });
/*
Pros:
Simple to implement
Wide support in older browsers

Cons:
Can lead to "callback hell" (deeply nested callbacks)
Difficult to handle errors
Limited support for chaining multiple asynchronous operations */

//Promises

// A Promise is a result object that is used to handle asynchronous operations. It represents a value that may not be available yet, but will be resolved at some point in the future. //
//Example
asyncFunction(param)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });
/*
Pros:
Easier to read and maintain than callbacks
Better support for error handling
Allows for chaining multiple asynchronous operations
Supports parallel execution of asynchronous operations

Cons:
More complex to implement than callbacks
Not supported in older browsers (although polyfills are available)

Why Promises are preferred:
Readability and Maintainability: Promises make the code easier to read and maintain, as the flow of the program is more linear and easier to follow.
Error Handling: Promises provide a better way to handle errors, as errors can be caught and handled in a centralized way using the catch method.
Chaining: Promises allow for chaining multiple asynchronous operations, making it easier to perform complex asynchronous tasks.
Parallel Execution: Promises support parallel execution of asynchronous operations, which can improve the performance of the program.
Flexibility: Promises can be used with various asynchronous APIs, including XMLHttpRequest, WebSockets, and Web Workers. */






