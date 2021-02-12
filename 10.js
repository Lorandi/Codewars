//Duplicate Encoder

function duplicateEncode(string) {

    newString = string.toUpperCase().split("")
    var resultado = "";

    for (var i = 0; i < string.length; i++) {
        newString = string.toUpperCase().split("")
        var igual = false;
        var removed = newString.splice(i, 1)
        for (var j = 0; j < newString.length; j++) {
            if (removed == newString[j]) {
                igual = true;
                break;
            }
        }
        if (igual == true) {
            resultado += ")"
        } else {
            resultado += "("
        }

        igual = false;
    } return resultado
}

console.log(duplicateEncode("din"))//(((;
console.log(duplicateEncode("recede"))//()()()
console.log(duplicateEncode("Success"))//)())())
console.log(duplicateEncode("(( @"))//))((