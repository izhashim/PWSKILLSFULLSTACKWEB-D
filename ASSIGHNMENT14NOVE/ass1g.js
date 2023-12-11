// Function 
function calculateCircleArea(radius) {
//Formula for the area of a circle: A = π * r^2
let area = Math.PI * Math.pow(radius, 2);
return area;
  }
  let radius = 10;
  // Call the function 
  let areaResult = calculateCircleArea(radius);
  console.log(`The area of the circle with radius ${radius} is: ${areaResult.toFixed(2)}`);
  