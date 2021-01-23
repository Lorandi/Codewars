//Find the smallest integer in the array
//não funcionou por causa da class

function findSmallestInt(arr){
    let smallest = arr.reduce((a,b) => Math.abs(a) + Math.abs(b));
    for (i = 0; i < arr.length; i++){
        if (arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(findSmallestInt([78,56,232,12,8]))       //8
console.log(findSmallestInt([-78,-56,-232,-12,-18]))      //12,
console.log(findSmallestInt([78,56,232,412,228]))    //56
console.log(findSmallestInt([78,56,232,12,0]))       //0
console.log(findSmallestInt([1,56,232,12,8]))        //1