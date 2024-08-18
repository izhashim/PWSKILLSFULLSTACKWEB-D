const ages = [19, 22, 19, 24, 20, 25, 21, 24, 25, 24];
ages.sort((a, b) => a - b);
const minAge = ages[0]; 
const maxAge = ages[ages.length - 1]; 
const middleIndex = ages.length / 2;
const medianAge = (ages[middleIndex - 1] + ages[middleIndex]) / 2; 
const sum = ages.reduce((acc, current) => acc + current, 0);
const averageAge = sum / ages.length; 
const range = maxAge - minAge; 
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge); 
console.log(diffMinAvg > diffMaxAvg); 
//O/P  True 