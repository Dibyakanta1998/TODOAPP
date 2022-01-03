var express = require("express");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const grouComp = require("./groupRout");

app.get("/abc", (req, res) => {
  res.send("This is a get server ");
});

app.use("/a", grouComp);
app.use("/ab", grouComp);

// app.post("/ab", (req, res) => {
//   res.send("This is a post server");
// });
app.listen(8000, () => {
  console.log("Server is running");
});
