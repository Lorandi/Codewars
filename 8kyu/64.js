//Power

const numberToPower = (number,power) => power == 0 ?  1: Array.from({length: power}, (x,k) => number ).reduce((a, b) => a * b); 

console.log(numberToPower(10, 3))//1);