var mongoose = require("mongoose");
var userSchema = mongoose.Schema(
  {
    name: { type: String },
    password: { type: String },
  },
  { versionKey: false }
);
module.exports = mongoose.model("details", userSchema);
