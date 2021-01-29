//Beginner - Reduce but Grow

const grow = array => array.reduce((a,b)=>a * b)


console.log(grow([1, 2, 3]))            //6;
console.log(grow([4, 1, 1, 1, 4]))      //16; 
console.log(grow([2, 2, 2, 2, 2, 2]))   //64;