import http from "node:http";

// Common JS ==> imports using require
// ESModules ==> import using import/export

const server = http.createServer((request, response) => {
  return response.end("Hello World!");
});

server.listen(3333);
