// //Exes and Ohs

function XO(str) {
    str = str.toLowerCase();
    totalX = 0;
    totalY = 0;
    for (var i = 0; i <str.length; i++) {
        if (str[i] == 'x'){
            totalX++
        }if (str[i] == "o"){
            totalY ++
        }
    }    
    return totalX === totalY;
}

// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }


console.log(XO('xo'))   //true);
console.log(XO("xxOo")) //true);
console.log(XO("xxxm")) //false);
console.log(XO("Oo"))   //false);
console.log(XO("ooom")) //false);