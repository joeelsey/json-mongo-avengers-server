var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var avengerSchema = mongoose.Schema({
  name: 'String'
});

module.exports = mongoose.model('Avenger', avengerSchema);
