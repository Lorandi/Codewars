//Don't give me five!

function dontGiveMeFive(start, end) {
    array = []
    for (i = start; i <= end; i++) {
        if (!("" + i).match(/5/g)) {
            array.push(i)
        }
    }
    return array.length
} 

console.log(dontGiveMeFive(1,9)) //8
console.log(dontGiveMeFive(4,17)) //12
console.log(dontGiveMeFive(-4,37)) //38
console.log(dontGiveMeFive(1,90)) //72
console.log(dontGiveMeFive(-50,-18)) //29
console.log(dontGiveMeFive(53,65)) //5
console.log(dontGiveMeFive(40,66)) //15
