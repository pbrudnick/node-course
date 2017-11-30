const assert = require('assert');

function sum(a, b) {
  return a + b;
}

assert.equal(sum(1, 1), 2);
assert.equal(sum(0, 1), 1);
assert.equal(sum(1, 1), 2);

function numberOrZero(x) {
  if (isNaN(x)) {
    return 0;
  }
  return Number(x);
}

assert.equal(numberOrZero(1), 1);
assert.equal(numberOrZero(2), 2);
assert.equal(numberOrZero(null), 0);
assert.equal(numberOrZero("any_string"), 0);
assert.equal(numberOrZero(), 0);

function canAccessToCasino(person) {
  if (!person || !person.age || person.age < 18) {
    throw new Error("cannot access!");
  }
  return true;
}

let sut = () => {
  canAccessToCasino();
};
assert.throws(sut, /cannot access!/);

sut = () => {
  canAccessToCasino({name: "Joe"});
};
assert.throws(sut, /cannot access!/);

sut = () => {
  canAccessToCasino({name: "Joe", age: 17});
};
assert.throws(sut, /cannot access!/);
assert.equal(canAccessToCasino({name: "Ian", age: 18}), true);