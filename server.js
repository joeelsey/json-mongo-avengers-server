var express = require('express');
var app = express();
var mongoose = require('mongoose');
var pg = require('pg');


mongoose.connect('mongodb://ec2-54-243-42-236.compute-1.amazonaws.com/ddrq6viktq67e9');

//mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/avengers_dev')

require('./routes/avenger_routes')(app);

//app.set('port',process.env.PORT || 3000);
app.set('port',process.env.PORT || 5432);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});

console.log('you made it this far.');
