const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question_id: Number,
  headline: String,
  source: String,
  leftOrRight: String,
  description: String,
});

module.exports = mongoose.model('Question', questionSchema);
