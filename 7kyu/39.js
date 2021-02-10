//Find the stray number

function stray (array){
    dif = array[0];
    for(i = 0; i < array.length; i++){
        if (dif != array[i] && array[i] != array[i + 1]){            
            dif = array[i];  
            break;                    
        } else if (array[0] != array[1]){
            break; 
        }
    }return dif;
}

console.log(stray([1, 1, 2]))   //2
console.log(stray([2, 1, 1]))