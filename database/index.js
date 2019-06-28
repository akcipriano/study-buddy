const MongoClient = require('mongodb').MongoClient;
const url = process.env.MongoURL || 'mongodb://localhost:27017/';

let database;

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  database = db.db('study-buddy');
  database.createCollection('meetups', (err, res) => {
    if (err) throw err;
    console.log('Collection created!');
  });
});

const save = (data, collection, callback) => {
  // MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  //   if (err) console.error('db save error:', err);
    database.collection(collection).insertOne(data, callback);
  // });
}

const findAll = (collection, callback) => {
  // MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  //   if (err) console.error('db find all:', err);
    database.collection(collection).find({}).toArray(callback);
  // });
}

module.exports = {
  save,
  findAll
}

