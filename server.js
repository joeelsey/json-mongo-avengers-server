var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/avengers_dev');

require('./routes/avenger_routes')(app);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});

console.log('you made it this far.');
