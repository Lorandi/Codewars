//Abbreviate a Two Word Name

// function abbrevName(name){
//     // name = name.split(' ')     
//     // return (name[0][0]+name[1][0]).toUpperCase().split('').join('.');
//     // return name.split(' ').map(i => i[0].toUpperCase()).join('.')
//  }

const abbrevName = name => name.split(' ').map(i => i[0].toUpperCase()).join('.')



console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));