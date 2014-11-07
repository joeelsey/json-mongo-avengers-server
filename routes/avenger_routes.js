var Avenger = require('../models/avengers.js');
var bodyparser = require('body-parser');

module.exports = function(app) {
  app.use(bodyparser.urlencoded({
    extended: true
  }));
  app.use(bodyparser.json());

  app.use(function(req, res, next) {
    console.log('Its happening!');
    next();
  });

  app.get('/', function(req, res) {
    res.json({
      msg: 'this is my avengers api.'
    });
  });

  app.get('/avengers', function(req, res) {
    Avenger.find(function(err, data) {
      if (err) return res.status(500).send('error');
      res.json(data);
    });
  });

  app.get('/avengers/:avenger_id', function(req, res) {
    Avenger.findById(req.params.avenger_id, function(err, avenger) {
      if (err) return res.status(500).send('error');
      res.json(avenger);
    });
  });

  app.put('/avengers/:avenger_id', function(req, res) {
    Avenger.findById(req.params.avenger_id, function(err, avenger) {
      if (err) return res.status(500).send('error');
      avenger.name = req.body.name;
      avenger.save(function(err) {
        if (err) return res.status(500).send('error');
        res.json({
          msg: 'avenger updated'
        });
      });
    });
  });

  app.delete('/avengers/:avenger_id', function(req, res) {
    Avenger.remove({
      _id: req.params.avenger_id
    }, function(err, avenger) {
      if (err) return res.status(500).send('error');
      res.json({
        msg: 'avenger destroyed'
      });
    });
  });

  app.post('/avengers', function(req, res) {
    var avenger = new Avenger();
    avenger.name = req.body.name;
    avenger.save(function(err,data) {
      if (err) return res.status(500).send(err);
      res.status(200).json(data);
    });
  });

};
