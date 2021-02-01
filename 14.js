//Jaden Casing Strings

const toJadenCase = str => {

    newArray = []

    str = str.split(' ')
    
    for (i = 0; i < str.length; i++) {
        str[i].split('')
        for (j = 0; j < 1; j++) {
            newArray.push(str[i][j].toUpperCase())
        }
        for (k = 1; k < str[i].length; k++) {
            newArray.push(str[i][k])            
        }
        newArray.push(" ")        
    }return newArray.join('')
    
    
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real")) //"How Can Mirrors Be Real If Our Eyes Aren't Real"