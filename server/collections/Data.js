const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
  date: String,
});

schema.statics.create = function(packet) {
  var data = new Data(packet);
  return data
    .save()
    .then((okData) => {
      return Promise.resolve(okData);
    })
    .catch((err) => {
      console.error(
        'Data.create data failed when save ' + packet + ' ==> ',
        err,
      );
      return Promise.reject(err);
    });
};

var Data;
function make(connection) {
  if (Data !== undefined) return Data;
  Data = connection.model('Data', schema);
  return Data;
}
module.exports = make;
