//Bit Counting

var countBits = function(n) {
    return n.toString(2).split("").reduce(((a,b)=> (+a) + (+b)),0)    
  };


// countBits = n => n.toString(2).split('0').join('')



console.log(countBits(0))   //0
console.log(countBits(4))   //1
console.log(countBits(7))   //3
console.log(countBits(9))   //2
console.log(countBits(10))  //2