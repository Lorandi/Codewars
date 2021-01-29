
//Correct the mistakes of the character recognition software

const correct = string => string.replace(/1/g,'I').replace(/5/g,'S').replace(/0/g,'O')

console.log(correct("L0ND0N"))      //"LONDON");
console.log(correct("DUBL1N"))      //"DUBLIN");
console.log(correct("51NGAP0RE"))   //"SINGAPORE");
console.log(correct("BUDAPE5T"))    //"BUDAPEST");
console.log(correct("PAR15"))       //"PARIS");