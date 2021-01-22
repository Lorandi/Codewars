//Smallest unused ID

function nextId(ids) {
    let missing = 0;
    ordened = ids.sort((a, b) => a - b)
    for (i = 0; i <= ordened.length; i++) {
        if(missing > ordened[i]){
            missing = missing;
        }else if (missing == ordened[i]) {
            missing++
        } else {
            return missing;
        }
    }
}

console.log(nextId([0, 1,1,1 ,2, 3,6, 5])) //4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //11
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 20])) //10