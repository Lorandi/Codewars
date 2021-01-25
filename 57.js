//Count by X

// const countBy = (x,y) => {
//     array=[];
//     var temp = x;
//     for(i = 0; i < y; i++){        
//         array.push(temp);
//         temp += x;
//     }
//     return array;
// }

const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

console.log(countBy(1,10))// [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2,5))// [2,4,6,8,10]