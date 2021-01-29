//Convert number to reversed array of digits
//function digitize(n) {       
    // n = n.toString().split("").reverse();    
    // for(i=0;i<n.length;i++){
    //     n[i]=parseInt(n[i])
    // }    
    // return n;    
    
    //return n.toString().split('').map(Number).reverse();
//}

const digitize = n => n.toString().split('').map(Number).reverse();
console.log(digitize(35231)) //[1,3,2,5,3]
