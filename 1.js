//Vowel Count

// const getCount = string => {
//     var count = 0
//     for (i=0; i < string.length; i++){
//         if(string[i] === "a"){
//             count++;
//         }else if(string[i] === "a"){
//             count++;
//         }else if(string[i] === "e"){
//             count++;
//         }else if(string[i] === "i"){
//             count++;
//         }else if(string[i] === "o"){
//             count++;
//         }else if(string[i] === "u"){
//              count++;    
//         }   
//     }
//     return count;
// }

const getCount = (str) => str.replace(/[^aeiou]/ig, "" ).length 

console.log(getCount("abracadabra"))    //5
console.log(getCount("pear tree"))      //4
console.log(getCount("o a kak ushakov lil vo kashu kakao")) //13
