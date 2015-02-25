'use strict';

process.env.MONGO_URI = 'mongodb://localhost/segments_test';
require('../server.js');
var mongoose = require('mongoose');
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

var expect = chai.expect;

describe('segments api end points', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function() {
      done();
    });
  });

  it('should create a new segment', function(done) {
    chai.request('localhost:3000')
      .post('/segments/new_segment')
      .send({storyId: '11', author: 'Tricia', levelId: '12'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.have.property('_id');
        expect(res.body.createdAt).to.exist;//jshint ignore:line
        expect(res.body.storyId).to.eql(11);
        expect(res.body.author).to.eql('Tricia');
        expect(res.body.levelId).to.eql(12);
        done();
      });
  });
});