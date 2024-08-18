// Function to search for specific character classes in a given string
function searchCharacterClasses(pattern, str) {
    const regex = new RegExp(pattern, 'g');
    return str.match(regex);
  }
  //Testing the function with patterns for digits, uppercase letters, lowercase letters, and special characters
  console.log("Testing searchCharacterClasses function:");
  // Test 1: Searching for digits
  const digitsPattern = '\\d';
  const digitsString = 'Hello123 World456';
  console.log(`Pattern: "${digitsPattern}", String: "${digitsString}" => ${searchCharacterClasses(digitsPattern, digitsString)}`);
  // Test 2: Searching for uppercase letters
  const uppercasePattern = '[A-Z]';
  const uppercaseString = 'Hello World';
  console.log(`Pattern: "${uppercasePattern}", String: "${uppercaseString}" => ${searchCharacterClasses(uppercasePattern, uppercaseString)}`);
  // Test 3: Searching for lowercase letters
  const lowercasePattern = '[a-z]';
  const lowercaseString = 'Hello World';
  console.log(`Pattern: "${lowercasePattern}", String: "${lowercaseString}" => ${searchCharacterClasses(lowercasePattern, lowercaseString)}`);
  // Test 4: Searching for special characters
  const specialCharsPattern = '[^a-zA-Z0-9]';
  const specialCharsString = 'Hello!@# World$%^';
  console.log(`Pattern: "${specialCharsPattern}", String: "${specialCharsString}" => ${searchCharacterClasses(specialCharsPattern, specialCharsString)}`);
  // Test 5: Searching for whitespace characters
  const whitespacePattern = '\\s';
  const whitespaceString = 'Hello World';
  console.log(`Pattern: "${whitespacePattern}", String: "${whitespaceString}" => ${searchCharacterClasses(whitespacePattern, whitespaceString)}`);
  // Test 6: Searching for word characters
  const wordCharsPattern = '\\w';
  const wordCharsString = 'Hello World';
  console.log(`Pattern: "${wordCharsPattern}", String: "${wordCharsString}" => ${searchCharacterClasses(wordCharsPattern, wordCharsString)}`);