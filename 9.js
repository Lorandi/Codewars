//Shortest Word

function findShort (string){
    string = string.split(' ');
    short = string[0].length;
    for (var i = 0; i < string.length; i++){
        if(short>string[i].length){
            short = string[i].length
        }
    }
    return short
}

// const findShort = (s) => Math.min(...s.split(" ").map(s => s.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) //3
console.log(findShort("turns out random test cases are easier than writing out basic ones")) //3); 