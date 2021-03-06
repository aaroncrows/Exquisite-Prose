'use strict';

process.env.MONGO_URI = 'mongodb://localhost/segments_test';
require('../server.js');
var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

var expect = chai.expect;

describe('segments api end points', function() {
  var token;
  before(function(done) {
    chai.request('localhost:3000')
    .post('/user/create_user')
    .send({email: 'example@email.com', password: '1234abc',
      screenname: 'exampleUser', location: 'examplion'})
    .end(function(err, res) {
      token = res.body.eat;
      done();
    });
  });
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should create a new segment', function(done) {
    chai.request('localhost:3000')
      .post('/segments/new_segment')
      .set('eat', token)
      .send({author: 'Tricia', levelId: 0})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('_id');
        expect(res.body.createdAt).to.exist;//jshint ignore:line
        expect(res.body.author).to.eql('Tricia');
        done();
      });
  });
});
