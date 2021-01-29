//Sum of positive

function positiveSum(arr) {
    let sum=0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
            sum += arr[i];
        }
    }
    return sum;
    
    //  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1,-4,7,12,-17,14,0,-5,7]))