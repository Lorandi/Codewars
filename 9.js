//String repeat

function repeatStr (n, s) {
    tempS = s;
    for(i=0;i<n-1;i++){
        tempS+=s;
    }
    return tempS;

    //return s.repeat(n);
  }

console.log(repeatStr(6, "I")) // "IIIIII"
console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"