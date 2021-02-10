//Count the Digit

function nbDig (n,d){
    array = []
    var regex = new RegExp(d, "g");
    for (i = 0; i <= n; i++){
        array.push(i*i+"")
    }
    return array.join(" ").match(regex).length;
}

console.log(nbDig(25, 1))   // 11
console.log(nbDig(5750, 0))   // 4700
console.log(nbDig(11011, 2))   // 9481
console.log(nbDig(12224, 8))   // 7733
