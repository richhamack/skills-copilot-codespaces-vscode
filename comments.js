// Create web server
// The web server should respond to any request by sending a response with a status code of 200 and a body of "OK"
// If the request path is /comments, the server should respond with the body "You don't have permission to access /comments"
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.end('You don\'t have permission to access /comments');
  } else {
    res.end('OK');
  }
});

server.listen(3000);
