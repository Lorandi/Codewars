// const highAndLow = string =>{
//     max = Math.max(...string.split(" ").map(Number))
//     min = Math.min(...string.split(" ").map(Number))

//     return max +" " + min
// }

const highAndLow = string => Math.max(...string.split(" ").map(Number)) +" " +Math.min(...string.split(" ").map(Number)) 
  
 

console.log(highAndLow("1 2 3 4 5"))     // return "5 1"
console.log(highAndLow("1 2 -3 4 5"))    // return "5 -3"
console.log(highAndLow("1 9 3 4 -5"))    // return "9 -5"