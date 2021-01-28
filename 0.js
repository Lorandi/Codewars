const compara = (arr1,arr2) =>{
    for (i = 0; i < arr2.length; i++){
        if (arr1[i] !== arr2[i]){
            return console.log(arr1[i],arr2[i],i);
        }
    }
}


compara(
    ['5', 'g', 't', 'p', 'e', '4', 'm'], 
    ['5', 'g', 't', 'p', 'g', 'e', '4', 'm', 't'])
    // [5,q,g,0,t,r,p,g,e,9,4,i,m,t]