function removeChar(inicio,fim){
    str = '1234567890'
        
    return str.slice(inicio,fim);
};

console.log(removeChar(0));     //1234567890
console.log(removeChar(-3,-1)); //89
console.log(removeChar(2));     //34567890
console.log(removeChar(1,-1));  //23456789
console.log(removeChar(0,3));   //123
