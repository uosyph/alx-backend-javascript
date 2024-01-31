const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\r\n').slice(1)
    .map((student) => student.split(','))
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

    let fields = students.map(student => student.field);
    let uniqueFields = new Set(fields);
    let studentsByField = {};
    for (let field of uniqueFields) {
      studentsByField[field] = [];
    }
    for (let student of students) {
        studentsByField[student.field].push(student.firstName);
    }
    console.log(studentsByField);
    return studentsByField;
}

module.exports = countStudents;
