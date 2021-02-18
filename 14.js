//Create Phone Number

function createPhoneNumber(numbers){
    phone ="";
    phone +="("
    for(var i=0; i<3; i++){
        phone +=numbers[i];
    }phone +=") "
    for(var i=3; i<6; i++){
        phone +=numbers[i];
    }phone +="-"
    for(var i=6; i<10; i++){
        phone +=numbers[i];
    }
    return phone;  
}

// function createPhoneNumber(numbers){
//     return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
//  }

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))  //"(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))  //"(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))  //"(123) 456-7890"