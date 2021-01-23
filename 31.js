
//Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    var positive = 0;
    var negative = 0;
    var newArray = [];
    if (input == null){
        return newArray;
    }else if (input.length>0){
        for(i=0; i<input.length; i++){
            if (input[i]> 0){
                positive++;
            }else{
                negative += input[i];
            }
        }
        newArray.push(positive)
        newArray.push(negative)
    } 
    return newArray;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])) //[10, -65]