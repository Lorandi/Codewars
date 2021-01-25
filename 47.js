//Reversed sequence

// const reverseSeq = (n) => {
//     array = []
//     for(i=1; i <= n ; i++) {
//         array.push(i)
//     }
//     return array.reverse();
// }

const reverseSeq = n => n < 2 ? n : [n].concat(reverseSeq(n-1))

console.log(reverseSeq(5));