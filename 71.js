//Count Odd Numbers below n

const oddCount = n => n % 2 == 0 ? n/2 : n/2 - 0.5

//const oddCount = n => Math.floor(n/2) ;

//const oddCount = n => parseInt(n/2) ;

console.log(oddCount(15))       //7
console.log(oddCount(15023))    //7511