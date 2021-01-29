//Training JS #8: Conditional statement--switch

function howManydays(month){
    var days;
    switch (month){
        case (1):
        case (3):
        case (5):
        case (7):
        case (8):
        case (10):
        case (12):
            days = 31;
            break;

        case (4):
        case (6):
        case (9):
        case (11):
            days = 30;
            break;

        case (2):
            days = 28;
            break;    
    }
    return days;
  }

//   function howManydays(month){
//     switch ( month ){
//       case 2 : return 28
//       case 4: case 6: case 9: case 11: return 30
//       default: return 31
//     }
//   }

  console.log(howManydays(1)); //31
  console.log(howManydays(2)); //28
  console.log(howManydays(3)); //31
  console.log(howManydays(4));  //30
  console.log(howManydays(12)); //31
