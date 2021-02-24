const mongoose = require('mongoose');
const mSchema = mongoose.Schema;

const hobbySchema = new mSchema({
  title: String,
  description: String,
  userId: String,
});

module.exports = mongoose.model('Hobby', hobbySchema);
