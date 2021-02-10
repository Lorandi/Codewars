//Credit Card Mask

function maskify(s){
    s = s.split("")
    for(var i=0;i<s.length-4;i++){       
       s[i] = "#"      
    }
    return s.join("");
}

    console.log(maskify('4556364607935616'))//'############5616');
    console.log(maskify('1'))               //'1');
    console.log(maskify('11111'))           //'#1111');