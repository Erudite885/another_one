const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hi there");
  res.end;
});

server.listen(3000);
