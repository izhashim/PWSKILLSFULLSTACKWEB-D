// Function to check if a person is eligible to vote using a ternary operator
function Eligibility(age) {
    const result = age < 18 ? "You cannot vote" : "You can vote";
    return result;
  }
  console.log(Eligibility(16)); // Output: You cannot vote
  console.log(Eligibility(20)); // Output: You can vote
  