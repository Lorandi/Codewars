//Money, Money, Money

function calculateYears(principal, interest, tax, desired) {    
    for (var years = 0; principal < desired; years++) {
        principal += (principal*interest) - (principal*interest*tax)        
    } return years;    
}


console.log(calculateYears(1000, 0.05, 0.18, 1100)) //3
console.log(calculateYears(1000,0.01625,0.18,1200)) //14
console.log(calculateYears(1000,0.05,0.18,1000))    //0
