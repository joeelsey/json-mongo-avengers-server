var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validator = require('validator');

//Program seems to work despite validation being wrong.
function validation(val) {
  if (typeof(val) == 'number') return val;
}
var custom = [validation, 'Not a string.'];
var avengerSchema = mongoose.Schema({
  name: {
    type: String,
    validate: custom
  }
});

module.exports = mongoose.model('Avenger', avengerSchema);
