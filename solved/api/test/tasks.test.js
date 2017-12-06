const app = require("../app.js"),
  chai = require("chai"),
  expect = chai.expect,
  request = require("supertest");

describe('tasks tests', function() {

  before((done) => {
    const mongoose = require('mongoose'),
      Task = mongoose.model('Task');

    Task.remove({}, function(err) { 
      if (err) return done(err);
      console.log('tasks collection cleaned!') ;
      done();
    });
  });

  describe('#GET tasks', function() { 
    it('should get all tasks', function(done) { 
      request(app)
        .get('/tasks')
        .expect(200)
        .then(response => {
          expect(response.body).to.be.an('array');
          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });

  describe('#POST task ', function() { 
    it('should create a task', function(done) {
      const body = { 
        name: 'task test' 
      };
      request(app)
        .post('/tasks')
        .send(body)
        .expect(200)
        .end(function(err, res) { 
          expect(res.body.name).to.equal(body.name);
          done(); 
        }); 
    }); 
  }); 
});