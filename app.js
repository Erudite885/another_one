const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h2>Hi there</h2>");
  res.end;
});

server.listen(3000);
