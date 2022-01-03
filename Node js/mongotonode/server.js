const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var mongoose = require("mongoose");
var userMongo = require("./schema/schema1");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/user", (req, res) => {
  console.log("req>>>>>>>>", req.body);
  var detail = req.body;
  userMongo.create(detail);
  res.end("User Details submitted");
});
app.get("/userD", (req, res) => {
  console.log("req>>>>>>>>", req.body.name);
  var details = req.body.name;
  userMongo.findOne({ name: details }, (err, data) => {
    console.log("data>>>>>>>>", data);
    res.send(data);
  });
});

mongoose.connect("mongodb://localhost:27017/mydbdk", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(6000, () => {
  console.log("Server 6000 is running");
});
