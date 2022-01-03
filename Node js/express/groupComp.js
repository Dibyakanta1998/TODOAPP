var express = require("express");
var app = express();

app.get("/x", (req, res) => {
  res.send("This is a get-x server ");
});
app.get("/y", (req, res) => {
  res.send("This is a get-y server ");
});
app.get("/z", (req, res) => {
  res.send("This is a get-z server ");
});

app.post("/ax", (req, res) => {
  res.send("This is a post-ax server");
});
app.post("/ay", (req, res) => {
  res.send("This is a post-ay server");
});
app.post("/az", (req, res) => {
  res.send("This is a post-az server");
});
module.exports = app;
