const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userhistorySchema = new Schema({
  testid: Number,
  userid: Number,
  q1: {
    question_id: Number,
    answer: String,
  },
  q2: {
    question_id: Number,
    answer: String,
  },
  q3: {
    question_id: Number,
    answer: String,
  },
  q4: {
    question_id: Number,
    answer: String,
  },
  q5: {
    question_id: Number,
    answer: String,
  },
  q6: {
    question_id: Number,
    answer: String,
  },
  q7: {
    question_id: Number,
    answer: String,
  },
  q8: {
    question_id: Number,
    answer: String,
  },
  q9: {
    question_id: Number,
    answer: String,
  },
  q10: {
    question_id: Number,
    answer: String,
  },
  q11: {
    question_id: Number,
    answer: String,
  },
  q12: {
    question_id: Number,
    answer: String,
  },
  bias: Number,
});

module.exports = mongoose.model('Userhistory', userhistorySchema);
