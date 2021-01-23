//Sum without highest and lowest number

const sumArray = array => array == null || array.length < 2 || array == 0 || array == undefined  || array === 'x'? 0 : array.sort((a, b) => a - b).slice(1,-1).reduce((a, b) => a + b);

console.log(sumArray([ 6, 2, 1, 8, 10 ]))   //16;
console.log(sumArray([ 0 ]))   //0;
console.log(sumArray( ))   //0;
console.log(sumArray([  ]))   //0;
console.log(sumArray(["casa","carro"]))   //0;