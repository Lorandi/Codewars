//Remove the minimum

const removeSmallest = array => {
    newArray = []
    menor = Math.min(...array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] == menor) {
            menor = NaN;
        } else {
            newArray.push(array[i])
        }

    }
    return newArray
}


console.log(removeSmallest([1, 2, 3, 4, 5]))//[2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]))//[5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]))//[2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([]))//[], "Wrong result for []");