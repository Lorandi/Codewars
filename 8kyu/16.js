//Remove String Spaces

//function noSpace(x){
    //return console.log(x.replace(/\s+/g, '') );
    //return console.log(x.split(' ').join(''))
    //return console.log(x.replace( /\s/g, '') );
//}

noSpace = (x) => x.split(' ').join('') //solução mais curta
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


