//Sum of Digits / Digital Root


function digital_root(n) {
    n = n.toString().split("").reduce((a,b)=>(+a)+(+b))
    return n < 10 ? +n : digital_root(n) 
}

console.log( digital_root(16))//7
console.log( digital_root(456))//6