const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const adduser = require('./controllers/Adduser');
const getquestion = require('./controllers/Question');
const cors = require('cors');
const app = express();
app.use(cors());


require('dotenv').config({
  path: path.join(__dirname, './settings.env'),
});

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true });
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello MongoDb!'));
app.post('/adduser', adduser.post);
app.get('/question', getquestion.displayQuestion);

app.listen(9999, () => console.log('It works!'));
