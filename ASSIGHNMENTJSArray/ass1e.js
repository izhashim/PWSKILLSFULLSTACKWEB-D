function displayStudentInfo(student) {
    for (let property in student) {
      console.log(`${property}: ${student[property]}`);
    }
  }
  //Usage
  const student = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    grade: 90
  };
displayStudentInfo(student);
  