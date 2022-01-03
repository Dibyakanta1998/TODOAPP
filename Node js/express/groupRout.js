var express = require("express");
var app = express();
const router = express.Router();

router.get("/o", (req, res) => {
  res.send("This is a get-o server ");
});
router.get("/m", (req, res) => {
  res.send("This is a get-m server ");
});
router.get("/n", (req, res) => {
  res.send("This is a get-n server ");
});

router.post("/am", (req, res) => {
  res.send("This is a post-mx server");
});
router.post("/an", (req, res) => {
  res.send("This is a post-ny server");
});
router.post("/ao", (req, res) => {
  res.send("This is a post-oz server");
});
module.exports = router;
