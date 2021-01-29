//Find Maximum and Minimum Values of a List

const max = (array) => {
    sum =  array.reduce((a,b) => Math.abs(a) - Math.abs(b));
    for (i = 0; i < array.length; i++){
        if (sum < array[i]){
            sum = array[i];
        }        
    }return sum;
}

const min = (array) => {
    sum =  array.reduce((a,b) => Math.abs(a) + Math.abs(b));
    for (i = 0; i < array.length; i++){
        if (sum > array[i]){
            sum = array[i];
        }        
    }return sum;
}

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

console.log(max([4,6,2,1,9,63,-134,566]))           // returns 566
console.log(min([-52, 56, 30, 29, -54, 0, -110]))   // returns -110
console.log(max([5]))                               // returns 5
console.log(min([42, 54, 65, 87, 0]))               // returns 0