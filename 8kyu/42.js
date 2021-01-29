//Sum Arrays

const sum = numbers => numbers.length > 0 ? numbers.reduce((a,b)=>a + b) : 0;

//const sum = numbers => numbers.reduce((a,b)=>a + b,0);

console.log(sum([]))// 0
console.log(sum([1, 5.2, 4, 0, -1]))// 9.2);