const goalsModule = require("../15.goals"), 
  chai = require("chai"),
  expect = chai.expect;

describe("tests for goals", () => {

  it("should return the Messi's goals", () => {
    const goals = goalsModule.getGoalsFrom("Messi");
    expect(goals).to.have.length(2);
    expect(goals[0].against).to.be.eql("Real Madrid");
    expect(goals[1].against).to.be.eql("Estudiantes");
  });

  it("should return the Tevez's goals", () => {
    const goals = goalsModule.getGoalsFrom("Tevez");
    expect(goals).to.have.length(1);
    expect(goals[0].against).to.be.eql("River");
  });

  describe("now testing async", () => {

    it("should return all the goals", (done) => {
      goalsModule.asyncTaskAndGetGoals((result) => {
        expect(result).to.be.eql(goalsModule.goals);
        done();
      });
    });

    it("should return a Promise with all the goals", () => {
      return goalsModule.asyncPromiseAndGetGoals().then((result) => {
        expect(result).to.be.eql(goalsModule.goals);
      });
    });
  })
});