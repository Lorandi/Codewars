//Ones and Zeros

// const binaryArrayToNumber = array =>{
//     total = 0;
//     var casas = array.length - 1;
//     for (i=0 ; i<array.length; i++){
//         total +=(array[casas - i] * Math.pow(2,i)) 
//     }
//     return total;
// }

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

console.log(binaryArrayToNumber([1,0,1,1,1,0,1,1,0,0,0,0,0]))     //5984
console.log(binaryArrayToNumber([0,0,1,0]))     //2
console.log(binaryArrayToNumber([1,1,1,1]))     //15
console.log(binaryArrayToNumber([0,1,1,0]))     //6
console.log(binaryArrayToNumber([1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0])) //12257120