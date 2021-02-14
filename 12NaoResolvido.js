//Array.diff

function arrayDiff(a, b) {
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if(a[i] === b[j]){
                a.splice(i,1)
            }
        }
    }return a;  
}

console.log(arrayDiff([], [4,5]))//[], "a was [], b was [4,5]");
console.log(arrayDiff([3,4], [3]))//[4], "a was [3,4], b was [3]");
console.log(arrayDiff([1,8,2], []))//[1,8,2], "a was [1,8,2], b was []");
console.log(arrayDiff([1,2,2],[2])) //[1]
