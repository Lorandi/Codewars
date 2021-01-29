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


flip('R', [95,43,1,23,100,13,200,55])
flip('L', [95,43,1,23,100,13,200,55])


