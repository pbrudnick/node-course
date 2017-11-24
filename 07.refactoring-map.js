// refactoring 05.first-class-functions.js using map()
function sum(a, b) {
    return a + b;
}

const myFunc = sum;

console.log(sum(1,1));
console.log(myFunc(1,1));

function SumANumber(fn, listOfNumbers, numberToSum) {
    return listOfNumbers.map(n => fn(n, numberToSum));
}

console.log(SumANumber(sum, [0,1,2,3,4], 10));