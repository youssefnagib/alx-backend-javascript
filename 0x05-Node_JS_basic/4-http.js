const http = require('http');

const app = http.createServer((req, response) => {
  response.write('Hello Holberton School!');
  response.end();
});
app.listen(1245);

module.exports = app;
