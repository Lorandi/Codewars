
//Be Concise IV - Index of an element in an array

var array = [2,3,5,7,11];

const find = (a,b) =>a.includes(b) ? a.indexOf(b) : "Not found";

console.log(find(array, 5))     //2);
console.log(find(array, 11))    //4);
console.log(find(array, 3))     //1)
console.log(find(array, 8))     //"Not found")
console.log(find(array, 12))     //"Not found")