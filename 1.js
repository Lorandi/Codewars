//Multiples of 3 or 5

function solution(number) {
    var array = []
    for (i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            array.push(i)
        }
    }
    return array.reduce((a, b) => a + b, 0);
}


console.log(solution(10))   //23
console.log(solution(0))   //0