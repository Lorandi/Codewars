//Don't give me five!

function dontGiveMeFive(start, end) {
    newArray = []
    function dif5(value){
        return value % 5 != value % 2 != 0 
    }
    for (i = start; i <= end; i++) {
        newArray.push(i)
    }
    console.log(newArray)
    console.log(newArray.filter(dif5))    
    return newArray.filter(dif5).length
} 


// console.log(dontGiveMeFive(1,9)) //8
// console.log(dontGiveMeFive(4,17)) //12
// console.log(dontGiveMeFive(1,9)) //8
console.log(dontGiveMeFive(-4,37)) //33
