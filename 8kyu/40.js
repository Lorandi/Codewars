//Get the mean of an array

// const getAverage = (array) =>{
// total = array.reduce((a,b)=>a + b)
// return average = parseInt(total/array.length)
// }

const getAverage = (array) => total = parseInt(array.reduce((a,b)=>a + b)/array.length)
   



console.log(getAverage([2,2,2,2]))//2);
console.log(getAverage([1,2,3,4,5,]))//3);
console.log(getAverage([1,1,1,1,1,1,1,2]))//1);