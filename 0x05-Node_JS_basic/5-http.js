const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const databaseFile = process.argv[2];

  res.setHeader('Content-Type', 'text/plain');

  if (parsedUrl.pathname === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.writeHead(200);
    res.write('This is the list of our students\n');

    countStudents(databaseFile)
      .then(() => {
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
