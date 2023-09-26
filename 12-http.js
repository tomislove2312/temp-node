const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome !");
  }
  if (req.url === "/about") {
    res.end("This is about");
  }
  res.end(`
  <h1>OOps! </h1>
  <p>we cannot find that page <p>
  <a href="/">Back Home </a>
  `);
});

server.listen(5005);
