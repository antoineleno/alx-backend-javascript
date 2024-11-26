const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length < 2) {
          reject(new Error('Cannot load the database'));
          return;
        }

        const header = lines.shift();

        const students = lines.map((line) => {
          const [firstname, lastname, age, field] = line.split(',');
          return { firstname, lastname, age, field };
        });

        console.log(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach((student) => {
          if (!fields[student.field]) {
            fields[student.field] = [];
          }
          fields[student.field].push(student.firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
          );
        }

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
