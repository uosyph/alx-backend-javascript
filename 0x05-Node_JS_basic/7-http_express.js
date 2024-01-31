const fs = require('fs');
const express = require('express');
const { argv } = require('process');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      throw Error('Cannot load the database');
    }
    const studentList = [];
    data.split('\n').forEach((data) => {
      studentList.push(data.split(','));
    });
    studentList.shift();
    const simplifiedList = [];
    studentList.forEach((data) => simplifiedList.push([data[0], data[3]]));

    const uniqueFields = new Set();
    simplifiedList.forEach((item) => uniqueFields.add(item[1]));

    const fieldCounts = {};
    uniqueFields.forEach((data) => { (fieldCounts[data] = 0); });
    simplifiedList.forEach((data) => { (fieldCounts[data[1]] += 1); });

    res.write(`Number of students: ${studentList.filter((check) => check.length > 3).length}\n`);
    Object.keys(fieldCounts).forEach((data) => res.write(`Number of students in ${data}: ${fieldCounts[data]}. List: ${simplifiedList.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));

    res.end();
  });
});

app.listen(1245);

module.exports = app;
