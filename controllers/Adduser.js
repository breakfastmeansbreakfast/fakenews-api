const User = require('../models/User');

exports.post = (req, res) => {
  const user = new User({
    userid: req.body.userid, username: req.body.username, email: req.body.email, name: req.body.name, password: req.body.password,
  });
  user.save((err, userCreated) => {
    res.json(userCreated);
  });
};

module.exports.post = exports.post;
