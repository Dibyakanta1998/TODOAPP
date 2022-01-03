const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, response) => {
  // console.log(res);
  var pathname = url.parse(req.url).pathname;
  console.log(pathname + " is recieved");
  // res.end("Hello World");
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      response.write(data.toString());
    }
    response.end();
  });
});

server.listen(4242, () => {
  console.log("Your server is running");
});
