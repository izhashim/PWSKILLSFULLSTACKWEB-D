//Function to calculate and print the estimated delivery time
function calculateDeliveryTime(packageType) {
    let deliveryTime;
   switch (packageType.toLowerCase()) {
      case "standard":
        deliveryTime = "3-5 business days";
        break;
      case "express":
        deliveryTime = "1-2 business days";
        break;
      case "overnight":
        deliveryTime = "Next business day";
        break;
      default:
        deliveryTime = "Invalid package type";
        break;
    }
  
    console.log(`Package type: ${packageType}, Estimated delivery time: ${deliveryTime}`);
  }
  //Testing the function with different package types
  console.log("Testing calculateDeliveryTime function:");
  calculateDeliveryTime("standard");
  calculateDeliveryTime("express");
  calculateDeliveryTime("overnight");
  calculateDeliveryTime("invalid");
  //user input
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the package type (standard, express, or overnight): ', packageType => {
    calculateDeliveryTime(packageType);
    readline.close();
  });