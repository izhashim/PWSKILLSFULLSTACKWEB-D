function outerFunction(outerParam) {
    const outerVariable = 'I am a variable declared in outerFunction';
  
    function innerFunction() {
      console.log(`outerParam: ${outerParam}`);
      console.log(`outerVariable: ${outerVariable}`);
    }
  
    return innerFunction;
  }
  //Creating inner function by calling outerFunction
  const innerFunc = outerFunction('Hello, World!');
  //calling inner function
  innerFunc();
  