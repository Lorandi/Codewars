//Grasshopper - Summation

function summation(num){
    total = 0;
    for(i=0; i <= num; i++){
        total += i;
    }
    return total;
}

//const summation = n => n * (n + 1) / 2;  //essa é uma conclusão matemática incrível

// var summation = function f(num) {
//     return num ? num + f(num-1) : 0; //recursiva
//   }

console.log(summation(0));
console.log(summation(1));
console.log(summation(8));