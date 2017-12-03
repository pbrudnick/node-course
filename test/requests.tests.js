const requestsModule = require("../18.requests"), 
  chai = require("chai"),
  expect = chai.expect,
  nock = require('nock');

describe("tests for requests", () => {

  it("should return the repos data of the request to the github api", (done) => {
    const reply = [{
      _id: '123ABC',
      _rev: '946B7D1C',
      name: 'alto_repo',
      clone_url: 'github.com/alto_repo.git'
    }];

    nock('https://api.github.com')
      .get('/orgs/nodejs/repos')
      .reply(200, reply);

    requestsModule.getNodeRepos((err, result) => {
      expect(err).to.be.null;
      expect(result).to.be.eql(reply);
      done();
    });
  });

  it("should return empty if 404", (done) => {
    const reply = [];

    nock('https://api.github.com')
      .get('/orgs/nodejs/repos')
      .reply(404);

    requestsModule.getNodeRepos((err, result) => {
      expect(err).to.be.null;
      expect(result).to.be.eql([]);
      done();
    });
  });

});