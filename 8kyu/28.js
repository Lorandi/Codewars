//A Needle in the Haystack

function findNeedle(haystack){
    for(var i=0; i<haystack.length; i++){
        if(haystack[i] === "needle"){
            return "found the needle at position " + i;
        }        
    }
    return;
}

//const findNeedle = haystack => 'found the needle at position ' + haystack.indexOf('needle')

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))