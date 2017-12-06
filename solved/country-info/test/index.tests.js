const countryInfo = require("../"),
  chai = require("chai"),
  expect = chai.expect;

describe("country-info tests", () => {

  it("should get the name of the country 'AR'", (done) => {
    countryInfo.getCountryInfo("AR", (err, result) => {
      expect(result.name).to.be.eql("Argentina");
      done();
    });
  });

  // now using TDD
  it("should get the code of the country 'Argentina'", () => {
    return countryInfo.getCountryCodeByName("Argentina")
      .then((result) => {
        expect(result.code).to.be.eql("AR");
      });
  });
});

// no olvidar before y beforeEach