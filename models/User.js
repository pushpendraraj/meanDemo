var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  useremail: String,
  password: String,
  gender: String,
  agree: String,
  created_date: { type: Date, default: Date.now },
  created_by: String,
  modified_date: { type: Date, default: Date.now },
  modified_by: String
});

module.exports = mongoose.model('User', UserSchema);
