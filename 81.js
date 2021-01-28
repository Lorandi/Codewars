//Will there be enough space?

const enough = (cap, on, wait) => cap - on - wait < 0 ? Math.abs(cap - on - wait) : 0;

//const enough = (cap, on, wait) => Math.max(on+wait-cap,0)

console.log(enough(10, 5, 5))       //0);
console.log(enough(100, 60, 50))    //10);
console.log(enough(20, 5, 5))       //0);
