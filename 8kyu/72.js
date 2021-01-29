
//The Feast of Many Beasts

const feast = (beast, dish) => beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] 

//const feast = (beast, dish) => beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);

//const feast = (beast, dish) => dish.startsWith(["c"])

console.log(feast("great blue heron", "garlic naan"))//true)
console.log(feast("chickadee", "chocolate cake"))//true)
console.log(feast("brown bear", "bear claw"))//false)