const express = require('express');

const app = express();
const PORT = 1245;

// Route handler for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
