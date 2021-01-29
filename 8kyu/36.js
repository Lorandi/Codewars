//Fake Binary

// function fakeBin(x){
//     x = x.split('').map(Number);
//     for(i = 0; i < x.length; i++){
//         if (x[i]>5){
//             x[i] = 1;
//         }else{
//             x[i] = 0;
//         }
//     }    
//     return x.join(''); 
// }

//const fakeBin = x => x.split('').map(Number).map(x => x >= 5 ? x = 1 : x = 0).join(''); 
const fakeBin = x => x.split('').map(x => x >= 5 ? 1 : 0).join(''); 


console.log(fakeBin('45385593107843568'))
console.log(fakeBin('509321967506747'))
console.log(fakeBin('366058562030849490134388085'))