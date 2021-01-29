
//Is n divisible by x and y?

const isDivisible = (n, x, y) =>  (n % x == 0) && (n % y == 0)? true : false

// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0
//   }

console.log(isDivisible(3,3,4));
console.log(isDivisible(12,3,4));
console.log(isDivisible(8,3,4));
console.log(isDivisible(48,3,4));