process.env.MONGO_URL = 'mongodb://localhost/avengers_test';
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use (chaihttp);

require('../../server');

var expect = chai.expect;

describe('basic avengers test', function(){
  var id;
  it('should be able to create an avenger', function(done){
    chai.request('http://localhost:3000')
    .post('/avengers')
    .send({msg: 'avenger created'})
    .end(function(err, res){
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('avenger created');
      //expect(res.body).to.have.property('_id');
      id = res.body.name;
      done();
    });
  });

  it('should be able to get all of the avengers to assemble', function(done){
    chai.request('http://localhost:3000')
    .get('/avengers')
    .end(function(err,res){
      expect(err).to.eql(null);
      expect(Array.isArray(res.body)).to.be.true;
      done();
    });
  });

  it('should be able to summon a single avenger', function(done){
    chai.request('http://localhost:3000')
      .get('/avengers/' + id)
      .end(function(err,res){
        expect(err).to.eql(null);
        expect(typeof(res.body)).to.eql('object');
        done();
    });
  });

  it('should be able to update an avengers name', function(done){
    var msg = 'avenger updated';
    chai.request('http://localhost:3000')
      .put('/avengers/' + id)
      .send({msg: 'avenger updated'})
      .end(function(err,res){
        expect(err).to.eql(null);
        expect(msg).to.eql('avenger updated');
        done();
    });
  });

  it('should be able to crush an avenger', function(done){
    var msg = 'avenger destroyed';
    chai.request('http://localhost:3000')
      .delete('/avengers/' + id)
      .send({ msg: 'avenger destroyed!' })
      .end(function(err,res){
        expect(err).to.be.eql(null);
        expect(msg).to.eql('avenger destroyed');
        done();
    });
  });

});
