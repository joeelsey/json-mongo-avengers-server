var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://ec2-54-83-204-78.compute-1.amazonaws.com');

//mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/avengers_dev')

require('./routes/avenger_routes')(app);

//app.set('port', 3000);
app.set('port', 5432);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});

console.log('you made it this far.');
