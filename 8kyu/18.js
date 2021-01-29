//Counting sheep...

function countSheeps(arrayOfSheep) {
    //return arrayOfSheeps.filter(Boolean).length;
    count = 0;
    for(i = 0; i< arrayOfSheep.length; i++){
        arrayOfSheep[i] ? count++ : 0;        
    //    if(arrayOfSheep[i] == true){
    //        count++;
    //    }
   }return count;
  }

  console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ]))

   

