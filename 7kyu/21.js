//Sum of odd numbers

const rowSumOddNumbers = (x) =>{
    y = 1;
    for(i = 1; i < x; i++){
        y += 2*i;
    }
    console.log("y:" + y)
    total = y
    for(j = 1; j < x; j++){
        total += y + 2*j
    }
    return total;
}

//const rowSumOddNumbers = x => x**3

//const rowSumOddNumbers = x => Math.pow(x, 3)

console.log(rowSumOddNumbers(1))    //1);
console.log(rowSumOddNumbers(2))    //8);
console.log(rowSumOddNumbers(3))    //27);
console.log(rowSumOddNumbers(4))    //64);
console.log(rowSumOddNumbers(5))    //125);



console.log(rowSumOddNumbers(42))   //74088);