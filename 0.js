function duplicateEncode (string){
       
    const newString = string.toUpperCase().split("")

    for(var i=0; i<string.length; i++){
        var removed = newString.splice(0,1)
        console.log(removed)
        console.log(newString)
        for(var j=0; j<newString.length; j++){
            if(removed == newString[j]){
                
            }

        }

    } return string
}

console.log(duplicateEncode("Success"))//)())())