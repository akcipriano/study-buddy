const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/newmeet', (req, res) => {
  console.log('BODY', req.body);
  db.save(req.body, 'meetups', (err) => {
    if (err) res.status(400).send(err);
    res.status(200).send('Saved to db!');
  });
});

app.get('/meetups', (req, res) => {
  db.findAll('meetups', (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).send(result);
  });
});

app.listen(port, () => {console.log(`Study-Buddy listening on ${port}`)});