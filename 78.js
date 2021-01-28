//Can we divide it?

const isDivideBy = (a,b,c) => a % b == 0 && a % c == 0

console.log(isDivideBy(-12, 2, -6))     //true);
console.log(isDivideBy(-12, 2, -5))     //false);
console.log(isDivideBy(45, 1, 6))       //false);
console.log(isDivideBy(45, 5, 15))      //true);
console.log(isDivideBy(4, 1, 4))        //true);
console.log(isDivideBy(15, -5, 3))      //true);