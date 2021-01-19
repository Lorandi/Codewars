//Gravity Flip

// const flip = (d, a) => {
//     if (d == "R") {
//         for (i = 0; i < a.length; i++) {
//             for (j = 0; j < a.length; j++) {
//                 if (a[j] > a[j + 1]) {
//                     temp = a[j + 1];
//                     a[j + 1] = a[j];
//                     a[j] = temp;
//                 };
//             }
//         }
//     }else if (d == "L") {
//         for (i = 0; i < a.length; i++) {
//             for (j = 0; j < a.length; j++) {
//                 if (a[j] < a[j + 1]) {
//                     temp = a[j + 1];
//                     a[j + 1] = a[j];
//                     a[j] = temp;
//                 };
//             }
//         }
//     }
//     else{
//         return
//     }
//     return a;
// }

const flip=(d, a)=>{
    if(d === 'R') return console.log(a.sort((a,b)=>a-b));
    if(d === 'L') return console.log(a.sort((a,b)=>b-a));
}


flip('R', [25,43,6559,4654,213,789874,1,33,10,0,9, 3, 11, 2, 1, 2, 1, 10, 2])
flip('R', [25,43,6559,4654,213,789874,1,33,10,0,9, 3, 11, 2, 1, 2, 1, 10, 2])


