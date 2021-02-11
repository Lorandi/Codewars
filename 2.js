//Find the odd int

function findOdd(A) {
    var a = [], b = [], prev;

    A.sort();

    for (var i = 0; i < A.length; i++) {
        if (A[i] !== prev) {
            a.push(A[i]);
            b.push(1);
        } else {
            b[b.length - 1]++;
        }
        prev = A[i];
    }
    
    for (j = 0; j < b.length; j++) {
        if (b[j] % 2 != 0) {
            return a[j]
        }
    }
}


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));//5
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));//-1
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]));//5
console.log(findOdd([10]));//10
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));//10
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));//1