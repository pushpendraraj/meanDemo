var mongoose = require('mongoose');

var PageSchema = new mongoose.Schema({
  title: String,
  slug: String,
  sub_title: String,
  short_description: String,
  description: String,
  created_date: { type: Date, default: Date.now },
  created_by: String,
  modified_date: { type: Date, default: Date.now },
  modified_by: String
});

module.exports = mongoose.model('Page', PageSchema);
