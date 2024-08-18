//Function to extract specific parts of the matched text using groups
function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);
    if (match) {
      return match.slice(1); // Return an array of groups (excluding the full match)
    } else {
      return null;
    }
  }
  //Testing the function with patterns that include groups to capture different parts of a date
  console.log("Testing extractGroups function:");
  // Test 1: Extracting day, month, and year from a date in the format "DD/MM/YYYY"
  const datePattern1 = /^(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})$/;
  const dateString1 = "24/07/2022";
  console.log(`Pattern: "${datePattern1}", String: "${dateString1}" => ${extractGroups(datePattern1, dateString1)}`);
  // Test 2: Extracting day, month, and year from a date in the format "MM-DD-YYYY"
  const datePattern2 = /^(?<month>\d{2})-(?<day>\d{2})-(?<year>\d{4})$/;
  const dateString2 = "07-24-2022";
  console.log(`Pattern: "${datePattern2}", String: "${dateString2}" => ${extractGroups(datePattern2, dateString2)}`);
  // Test 3: Extracting day, month, and year from a date in the format "YYYY-MM-DD"
  const datePattern3 = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$/;
  const dateString3 = "2022-07-24";
  console.log(`Pattern: "${datePattern3}", String: "${dateString3}" => ${extractGroups(datePattern3, dateString3)}`);