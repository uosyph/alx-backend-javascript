const fs = require('fs');

// Asynchronous function to count and display information about students
async function countStudents(path) {
  let data;

  try {
    // Read the content of the file asynchronously
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    // Throw an error if there is any issue reading the file
    throw new Error('Cannot load the database');
  }

  // Parse the data into an array of student objects
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  // Filter and map CS students
  const csStudents = students
    .filter((student) => student.field === 'CS')
    .map((student) => student.firstName);

  // Filter and map SWE students
  const sweStudents = students
    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);

  return { students, csStudents, sweStudents };
}

module.exports = countStudents;
