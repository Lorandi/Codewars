//Beginner Series #3 Sum of Numbers

const getSum = (a, b) => {
    var menor = Math.min(a, b);
    var maior = Math.max(a, b);
    count = menor;
    for (i = menor; i < maior; i++) {
        count += (i + 1)
    } return count;
}

console.log(getSum(0, -1))//-1)
console.log(getSum(1, 0))   //== 1   // 1 + 0 = 1
console.log(getSum(1, 2))   //== 3   // 1 + 2 = 3
console.log(getSum(0, 1))   //== 1   // 0 + 1 = 1
console.log(getSum(1, 1))   //== 1   // 1 Since both are same
console.log(getSum(-1, 0))   // == -1 // -1 + 0 = -1
console.log(getSum(-1, 2))   // == 2  // -1 + 0 + 1 + 2 = 2