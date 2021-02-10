//Mumbling

const accum = string => {
    var newString = string[0].toUpperCase();
    for(i=1; i<string.length; i++){
        newString+="-" + string[i].toUpperCase();
        for(j=0; j<i; j++){
            newString += string[i].toLowerCase();
        }
    }
    return newString
}


//const accum = string => string.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

console.log(accum("abcd"))// "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty"))// "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"))// "C-Ww-Aaa-Tttt"