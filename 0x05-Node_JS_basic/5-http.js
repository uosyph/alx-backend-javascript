const http = require('http');
const students = require('./3-read_file_async');
const host = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handle root endpoint
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } 
  // Handle /students endpoint
  else if (req.url === '/students') {
    // Retrieve student data asynchronously
    students(process.argv[2]).then((data) => {
      // Display information about students
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
      res.end();
    }).catch((err) => {
      // Handle errors if there are any during the asynchronous operation
      res.end(err.message);
    });
  }
});

// Start the server and listen on the specified host and port
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
