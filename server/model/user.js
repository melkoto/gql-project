const mongoose = require('mongoose');
const mSchema = mongoose.Schema;

const userSchema = new mSchema({
  name: String,
  age: Number,
  profession: String,
});

module.exports = mongoose.model('User', userSchema);
