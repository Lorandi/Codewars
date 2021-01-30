//Descending Order

const descendingOrder = number =>Number((''+number).split("").sort().reverse().join(""))

console.log(descendingOrder(0))  //0)
console.log(descendingOrder(1))  //1)
console.log(descendingOrder(123456789))  //987654321)