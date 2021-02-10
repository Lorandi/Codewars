
//Is this a triangle?

function isTriangle(a,b,c){
    if (a >= (b + c) || b >= (a + c) || c >= (a + b)){
        return false;
    }
    return true;   
}

//var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2

console.log(isTriangle(1,2,2))  //true
console.log(isTriangle(7,2,2))  //false