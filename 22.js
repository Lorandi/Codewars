//Regex validate PIN code

// const validatePIN = s => {
//     s = s.split("").filter(Boolean);
    
//     if (s.length != 4 && s.length != 6) {
//         return false;
//     } else if(s[0] == "'" ){       
//         return false       
//     }else if(s.map(Number).includes(NaN) ){
//       return false 
//     }
//   return true; 
// }


//const validatePIN = s => s.match("^\\d{4}$") ? true : s.match("^\\d{6}$") ? true : false

const validatePIN = s => /^(\d{4}|\d{6})$/.test(s)





console.log(validatePIN("1234"))//true,
console.log(validatePIN("1"))//,false,S
console.log(validatePIN("123"))//,false,
console.log(validatePIN("a234"))//,false,
console.log(validatePIN("0000"))//,true,
console.log(validatePIN("12345"))//,false,
console.log(validatePIN("000000"))//,true,
console.log(validatePIN(".00000"))//,false,
console.log(validatePIN("123"))//,false
console.log(validatePIN("09876"))//,false

