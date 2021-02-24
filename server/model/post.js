const mongoose = require('mongoose');
const mSchema = mongoose.Schema;

const postSchema = new mSchema({
  comment: String,
  userId: String,
});

module.exports = mongoose.model('Post', postSchema);
