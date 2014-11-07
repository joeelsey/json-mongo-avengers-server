var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://ec2-54-83-204-78.compute-1.amazonaws.com
/d8k48gen4uded8');

require('./routes/avenger_routes')(app);

app.set('port', 5432);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});

console.log('you made it this far.');
