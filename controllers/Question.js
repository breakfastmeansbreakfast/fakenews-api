const Question = require('../models/Question');

exports.list = (req, res) => {
 // console.log(req)
  Question.find({}, (err, question) => {
    console.log(question)
    if (err) {
      res.json('Something went wrong');
    }
    res.json(question);
  });
};

/*exports.get = (req, res) => {
  Question.findById(req.params.question_id, (err, question) => {
    if (err) {
      res.json('something went wrong...');
    }
    res.json(question);
  });
};*/

module.exports.list = exports.list;
//module.exports.get = exports.get;
