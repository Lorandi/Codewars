// const removeEveryOther = array => {
//     newArray = [];
//     for (i = 0; i < array.length; i++) {
//         if(i % 2 == 0){         
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

const removeEveryOther = arr => arr.filter((elem, index) => index % 2 === 0);






console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))//['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))//[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]))// [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]))//[['Goodbye']]);