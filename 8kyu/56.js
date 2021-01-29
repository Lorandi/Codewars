//If you can't sleep, just count sheep!!

const countSheep = n => {
    count = "";
    for(i=1; i<=n;i++){
        count += i + " sheep..." 
    }
    return count;
}

//const countSheep = length => Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

//const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

console.log(countSheep(3))
console.log(countSheep(1))
console.log(countSheep(5))