//Number of People in the Bus

// const number = (array ) => {
//     total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total +=array[i].reduce((a,b) => a - b)
//     }
//     return total;
// }



const number = (array) => array.map(x => x.reduce((a,b) => a - b)).reduce((a,b) => a + b)

//const number = (passengers) => passengers.reduce((total,[on,out]) => total + on - out,0);


//console.log(number([10,5,3,2]))
console.log(number([[10,0],[3,5],[5,8]]))                        //5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))    //17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))      //21