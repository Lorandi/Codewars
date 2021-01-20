//Find the smallest integer in the array

function SmallestIntegerFinder(args){
    let smallest = args.reduce((total, elementos) => total + elementos)
    for(i=0; i<args.length; i++){ 
        if (args[i] < smallest) smallest = args[i];    
    }   
    return smallest;
}

console.log(SmallestIntegerFinder([78,56,232,12,8]))
console.log(SmallestIntegerFinder([78,56,232,412,228]))
console.log(SmallestIntegerFinder([34, -345, -1, 100]))