//Your order, please

function order(words) {
    if (words.length < 1) {
        return "";
    }
    words = words.split(" ")
    var newArr = new Array(words.length)

    for (var i = 0; i < words.length; i++) {
        for (var j = 0; j < words[i].length; j++) {
            num = Number(words[i][j])
            if (Number.isInteger(num)) {
                newArr[num - 1] = words[i]
            }
        }
    } return newArr.join(" ")
}

console.log(order("is2 Thi1s T4est 3a"))    //"Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))  //"Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""))  //"")
