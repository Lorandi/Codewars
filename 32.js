//Sum of the first nth term of Series

const SeriesSum = n =>{
    total = 0;
    divisor = 1;
    i = 0;
    if (n == 0){
        return 0.00.toFixed(2)
    }
    do{
       total += (1/divisor)
       divisor+=3; 
       i++;
    }while(i < n)
    return total.toFixed(2)
}

console.log(SeriesSum(1))   //"1.00")
console.log(SeriesSum(2))   //"1.25")
console.log(SeriesSum(3))   //"1.39")
console.log(SeriesSum(4))   //"1.49")