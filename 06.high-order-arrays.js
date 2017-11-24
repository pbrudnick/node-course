// Array-map()
const double = x => x * 2;
const arr = [1, 2, 3];
const result1 = arr.map(n => n*2);
const result2 = arr.map(double);

console.log(result1);
console.log(result2);

const result3 = arr.map(double).map(double);

console.log(result3);

// Array.filter()

const bestPlayers = [
  {
    name: "Juan Román Riquelme",
    country: "AR"
  },
  {
    name: "Lionel Messi",
    country: "AR"
  },
  {
    name: "Zinedine Zidane",
    country: "FR"
  },
  {
    name: "Johan Cruyff",
    country: "HO"
  },
  {
    name: "Ronaldo",
    country: "BR"
  },
];

const playersArgentos = bestPlayers.filter(player => player.country === "AR");
console.log(playersArgentos);

// Array.reduce
const sum = arr.reduce((a, b) => a+b);
console.log(sum);