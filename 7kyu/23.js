//Printer Errors
var s = "LMauris ornare class "

function printerError(s) {          
        const regex = s => s.match(/[^a-m]/g) ? s.match(/[^a-m]/g).length  : 0       
        return regex(s) + "/" + s.length
}


console.log(printerError(s))    //"3/56"