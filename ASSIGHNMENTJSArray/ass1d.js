//Initial array of students
let students = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 90 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 21, grade: 85 },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 22, grade: 95 },
];

//Fn to Add a Student
function addStudent(student) {
  students.push(student);
  console.log(`Student added: ${student.firstName} ${student.lastName}`);
}

//Fn to Update Student Information
function updateStudent(id, updates) {
  const student = students.find((student) => student.id === id);
  if (student) {
    Object.assign(student, updates);
    console.log(`Student updated: ${student.firstName} ${student.lastName}`);
  } else {
    console.log(`Student not found: ${id}`);
  }
}

//Fn to Delete a Student
function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(`Student deleted: ${id}`);
  } else {
    console.log(`Student not found: ${id}`);
  }
}

//Fn to List All Students
function listAllStudents() {
  console.log('Students:');
  students.forEach((student) => {
    console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
  });
}

//Fn to Find Students by Grade
function findStudentsByGrade(grade) {
  const results = students.filter((student) => student.grade === grade);
  console.log(`Students with grade ${grade}:`);
  results.forEach((student) => {
    console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
  });
}

//Fn to Calculate Average Age
function calculateAverageAge() {
  const sum = students.reduce((acc, student) => acc + student.age, 0);
  const averageAge = sum / students.length;
  console.log(`Average age: ${averageAge.toFixed(2)}`);
}
//usage:
addStudent({ id: 4, firstName: 'Alice', lastName: 'Williams', age: 23, grade: 92 });
updateStudent(2, { grade: 90 });
deleteStudent(3);
listAllStudents();
findStudentsByGrade(90);
calculateAverageAge();