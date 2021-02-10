//You're a square!

const isSquare = num => num !== 0 ? Math.sqrt(num)/parseInt(Math.sqrt(num)) === 1 : true;

//const isSquare = num =>  Math.sqrt(n) % 1 === 0;

//const isSquare = n => Number.isInteger(Math.sqrt(n));

console.log(isSquare(-1))  //false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare( 0))  //true, "0 is a square number (0 * 0)");
console.log(isSquare( 3))  //false, "3 is not a square number");
console.log(isSquare( 4))  //true, "4 is a square number (2 * 2)");
console.log(isSquare(25))  //true, "25 is a square number (5 * 5)");
console.log(isSquare(26))  //false, "26 is not a square number");