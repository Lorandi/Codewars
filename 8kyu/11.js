//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
    return bool == true ? 'Yes' : 'No'
    //return bool ? 'Yes':'No';
  }
console.log(boolToWord(true))  //'Yes'
console.log(boolToWord(false)) //'No'