function sum(a, b) {
  return a + b;
}

const myFunc = sum;

console.log(sum(1,1));
console.log(myFunc(1,1));

function SumANumber(fn, listOfNumbers, numberToSum) {
  const newList = [];

  listOfNumbers.forEach(n => {
    newList.push(fn(n, numberToSum));
  });

  return newList;
}

console.log(SumANumber(sum, [0,1,2,3,4], 10));