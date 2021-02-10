//Find the next perfect square!

// const findNextSquare = n => {
//     if (Number.isInteger(Math.sqrt(n))) {
//         next = n + 1;
//         while (!Number.isInteger(Math.sqrt(next))) {
//             next++;
//         } return next
//     }
//     else {
//         return -1;
//     }
// }

const findNextSquare = n => Math.sqrt(n) % 1 === 0 ? Math.pow((Math.sqrt(n)+1),2) : -1;


console.log(findNextSquare(120))          //144, "Wrong output for 121");
console.log(findNextSquare(625))            //676, "Wrong output for 625");
console.log(findNextSquare(319225))         //320356, "Wrong output for 319225");
console.log(findNextSquare(15241383936))    //15241630849, "Wrong output for 15241383936");