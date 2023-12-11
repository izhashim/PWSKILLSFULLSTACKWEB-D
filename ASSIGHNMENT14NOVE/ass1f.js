// Function to calculate Body Mass Index (BMI)
function calculateBMI(weight, height) {
// Convert height from centimeters to meters
    let heightInMeters = height / 100;
//  BMI  formula
    let bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
  }
  let weightInKg = 70; 
  let heightInCm = 175; 
  // Call the function 
  let bmiResult = calculateBMI(weightInKg, heightInCm);
  console.log(`BMI: ${bmiResult.toFixed(2)}`);
  