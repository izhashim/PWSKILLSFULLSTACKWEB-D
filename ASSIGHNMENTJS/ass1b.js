// Function to test if a regex pattern matches a string
function regexTest(pattern, str) {
    const regex = new RegExp(pattern);
    return regex.test(str);
  }
  
  //Testing the function with various patterns and strings
  console.log("Testing regexTest function:");
  // Test 1: Matching a literal string
  console.log(`Pattern: "hello", String: "hello world" => ${regexTest("hello", "hello world")}`); 
  console.log(`Pattern: "hello", String: "goodbye world" => ${regexTest("hello", "goodbye world")}`); 
  // Test 2: Using dot (.) to match any character
  console.log(`Pattern: "h.llo", String: "hello world" => ${regexTest("h.llo", "hello world")}`); 
  console.log(`Pattern: "h.llo", String: "hallo world" => ${regexTest("h.llo", "hallo world")}`); 
  // Test 3: Using asterisk (*) to match 0 or more occurrences
  console.log(`Pattern: "hello*", String: "hello world" => ${regexTest("hello*", "hello world")}`); 
  console.log(`Pattern: "hello*", String: "hell world" => ${regexTest("hello*", "hell world")}`); 
  console.log(`Pattern: "hello*", String: "h world" => ${regexTest("hello*", "h world")}`); 
  // Test 4: Using plus sign (+) to match 1 or more occurrences
  console.log(`Pattern: "hello+", String: "hello world" => ${regexTest("hello+", "hello world")}`); 
  console.log(`Pattern: "hello+", String: "hell world" => ${regexTest("hello+", "hell world")}`); 
  console.log(`Pattern: "hello+", String: "h world" => ${regexTest("hello+", "h world")}`); 
  // Test 5: Using question mark (?) to match 0 or 1 occurrence
  console.log(`Pattern: "hello?", String: "hello world" => ${regexTest("hello?", "hello world")}`); 
  console.log(`Pattern: "hello?", String: "hell world" => ${regexTest("hello?", "hell world")}`); 
  console.log(`Pattern: "hello?", String: "h world" => ${regexTest("hello?", "h world")}`); 
  // Test 6: Using caret (^) to match the start of the string
  console.log(`Pattern: "^hello", String: "hello world" => ${regexTest("^hello", "hello world")}`); 
  console.log(`Pattern: "^hello", String: "goodbye hello world" => ${regexTest("^hello", "goodbye hello world")}`); 
  // Test 7: Using dollar sign ($) to match the end of the string
  console.log(`Pattern: "hello$", String: "goodbye hello" => ${regexTest("hello$", "goodbye hello")}`); 
  console.log(`Pattern: "hello$", String: "hello world" => ${regexTest("hello$", "hello world")}`); 
  // Test 8: Using backslash-d (\d) to match 1 or more digits
  console.log(`Pattern: "\\d+", String: "hello123 world" => ${regexTest("\\d+", "hello123 world")}`); 
  console.log(`Pattern: "\\d+", String: "hello world" => ${regexTest("\\d+", "hello world")}`); 
  // Test 9: Using backslash-w (\w) to match 1 or more word characters
  console.log(`Pattern: "\\w+", String: "hello world" => ${regexTest("\\w+", "hello world")}`); 
  console.log(`Pattern: "\\w+", String: "hello! world" => ${regexTest("\\w+", "hello! world")}`); 
  console.log(`Pattern: "\\w+", String: "hello@ world" => ${regexTest("\\w+", "hello@ world")}`); 