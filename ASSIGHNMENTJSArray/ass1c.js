//a)Prevent extensions to the student object
const student = { name: 'John', age: 20 };
Object.preventExtensions(student);
// b) Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);
console.log(`Student object is extensible: ${extensibleStatus}`); // false
//c)Creating a new object called teacher
const teacher = { subject: 'Math' };
//d)Seal the teacher object
Object.seal(teacher);
//e)Checking if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);
console.log(`Teacher object is sealed: ${sealedStatus}`); // true
//f)Printing the extensibleStatus and sealedStatus to the console
console.log(`Extensible Status: ${extensibleStatus}, Sealed Status: ${sealedStatus}`);