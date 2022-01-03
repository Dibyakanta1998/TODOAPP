const fs = require("fs");
var data = fs.readFileSync("mytxt.txt");
//fs.readFileSync("mytxt.txt");
console.log(data.toString());
console.log("program ended");
