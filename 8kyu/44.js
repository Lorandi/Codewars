//Calculate average

const find_average = (array) => array.reduce((a,b)=>a + b)/array.length

console.log(find_average([1,1,1])) // 1
console.log(find_average([1,2,3])) // 2