const Question = require('../models/Question');

exports.list = (req, res) => {
  Question.find({}, (err, question) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.json(question);
  });
};

exports.displayQuestion = (req, res) => {
  Question.find({ headline: 'CHECK OUT THIS FUCKING HEADLINE' }, (err, question) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.json(question);
  });
};

module.exports.list = exports.list;
module.exports.displayQuestion = exports.displayQuestion;
