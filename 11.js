//Take a Ten Minute Walk

function isValidWalk(arr) {

    var north = 0; south = 0; east = 0; west = 0;

    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 'n': north++; break
            case 's': south++; break
            case 'w': east++; break
            case 'e': west++; break
        }
    }
    return arr.length == 10 && north == south && east == west ? true : false;
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))//true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']))//false
console.log(isValidWalk(['w']))//false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))//false