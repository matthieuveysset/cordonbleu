const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db_url = process.env.DB_URL || 'mongodb://127.0.0.1:27017/datatest';

var connection;
function tryConnect() {
  connection = mongoose.createConnection(db_url, (err) => {
    if (err) {
      console.error('MongoDB connection error: ', err);
    } else {
      console.log('MongoDB connexion Success');
    }
  });
}
tryConnect();

const Data = require('./Data')(connection);

const collections = {
  Data,
};

module.exports = collections;