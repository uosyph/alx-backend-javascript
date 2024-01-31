const http = require('http');
const fs = require('fs');
const { argv } = require('process');

function countStudents(path, stream) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8');
    const studentData = [];
    data.split('\n').forEach((data) => {
      studentData.push(data.split(','));
    });
    studentData.shift();

    const simplifiedData = [];
    studentData.forEach((data) => simplifiedData.push([data[0], data[3]]));

    const uniqueFields = new Set();
    simplifiedData.forEach((item) => uniqueFields.add(item[1]));

    const fieldCounts = {};
    uniqueFields.forEach((data) => { (fieldCounts[data] = 0); });
    simplifiedData.forEach((data) => { (fieldCounts[data[1]] += 1); });
    stream.write(`Number of students: ${studentData.length}\n`);

    const temp = [];
    Object.keys(fieldCounts).forEach((data) => temp.push(`Number of students in ${data}: ${fieldCounts[data]}. List: ${simplifiedData.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}\n`));
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < temp.length; i++) {
      if (i === temp.length - 1) {
        temp[i] = temp[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      stream.write(temp[i]);
    }
  } else { throw new Error('Cannot load the database'); }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(argv[2], res);
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
