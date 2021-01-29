//altERnaTIng cAsE <=> ALTerNAtiNG CaSe

function toAlternatingCase(string){
    var newStr = "";
    for(i = 0; i < string.length;i++){        
        temp = string[i].charCodeAt(string)       
        if (temp < 97){
            temp = temp + 32;
            newStr += String.fromCharCode(temp);
        } else if (temp < 122){
            temp = temp - 32;
            newStr += String.fromCharCode(temp);
        }
    }
    return newStr
}
console.log(toAlternatingCase("sTRING.PROTOTYPE.TOaLTERNATINGcASE"))

