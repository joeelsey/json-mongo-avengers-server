var mongoose = require('mongoose');
var Schema = mongoose.Schema;


function validator(val) {
  return val == val.toString();
}

var custom = [validator, 'Not a string.'];
var avengerSchema = mongoose.Schema({
  name: {
    type: String,
    validate: custom
  }
});

module.exports = mongoose.model('Avenger', avengerSchema);
