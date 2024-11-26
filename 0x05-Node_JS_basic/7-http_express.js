const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<String>} A promise resolving to a report of students.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));
      const fieldIndex = headers.length - 1;

      const fieldGroups = students.reduce((acc, student) => {
        if (student.length === headers.length) {
          const field = student[fieldIndex];
          const firstname = student[0];

          if (!acc[field]) {
            acc[field] = [];
          }
          acc[field].push(firstname);
        }
        return acc;
      }, {});

      const totalStudents = Object.values(fieldGroups).reduce(
        (sum, group) => sum + group.length,
        0,
      );

      const report = [`Number of students: ${totalStudents}`];
      for (const [field, names] of Object.entries(fieldGroups)) {
        report.push(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
      }
      resolve(report.join('\n'));
    }
  });
});

// Route handler for the root endpoint
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Route handler for /students endpoint
app.get('/students', (req, res) => {
  const response = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      response.push(report);
      res.set('Content-Type', 'text/plain');
      res.send(response.join('\n'));
    })
    .catch((err) => {
      response.push(err.message);
      res.set('Content-Type', 'text/plain');
      res.send(response.join('\n'));
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
