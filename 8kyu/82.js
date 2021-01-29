//I love you, a little , a lot, passionately ... not at all

const howMuchILoveYou = nbPetals =>{
    var number = nbPetals % 6
    switch(number){
        case 0: return "not at all"
        case 1: return "I love you"
        case 2: return "a little"
        case 3: return "a lot"
        case 4: return "passionately"
        case 5: return "madly"
    }    
}


  console.log(howMuchILoveYou(7)) //"I love you")
  console.log(howMuchILoveYou(3)) //"a lot")
  console.log(howMuchILoveYou(6)) //"not at all")