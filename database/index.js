const MongoClient = require('mongodb').MongoClient;
const url = process.env.MongoURL || 'mongodb://localhost:27017/';

let database;

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  database = db.db('study-buddy');
  database.createCollection('meetups', (err, res) => {
    if (err) throw err;
    console.log('Meetups Collection created!');
  });
  database.createCollection('mathmeetups', (err, res) => {
    if (err) throw err;
    console.log('Math Collection created!');
  });
});

const save = (data, collection, callback) => {
  database.collection(collection).insertOne(data, callback);
}

const findAll = (collection, callback) => {
  database.collection(collection).find({}).toArray(callback);
}

module.exports = {
  save,
  findAll
}

