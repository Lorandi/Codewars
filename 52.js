//How good are you really?

const betterThanAverage = (classPoints, yourPoints) => yourPoints > classPoints.reduce((a,b) => a + b)/classPoints.length;

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))//true);
console.log(betterThanAverage([2, 3], 5))//true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))//false);