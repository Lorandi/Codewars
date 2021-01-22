
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer)); //10

console.log(array1.reduce(reducer, 5)); //esse 5 que aparece é o valor inicial que será somado ao acumulador
// expected output: 15
