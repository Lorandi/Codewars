//Find the divisors!

function divisors(int){    
    newArray = []
    for(var i = 2; i < int; i++){
        if(int % i == 0){
            newArray.push(i)            
        }
    } return newArray.length > 1 ? newArray : int + " is prime"     
   
}

console.log(divisors(15))//[3, 5]);
console.log(divisors(12))//[2, 3, 4, 6]);
console.log(divisors(13))//"13 is console.log