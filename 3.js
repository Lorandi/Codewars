//EvenOrOdd

//Forma 1
// function even_or_odd(number){
//     return number % 2 == 0 ? "Even" : "Odd";
// } 

//Forma 2
// function even_or_odd(number){
//     return number % 2 ? "Odd" : "Even"; //Assim também funciona pois retorna 1 se for verdadeiro e 0 se for falso, ao contráiro do que eu imaginava
// } 

//Forma 3
const even_or_odd = number => number % 2 == 0 ? "Even" : "Odd";


console.log(even_or_odd(33)) // - 1 - Odd
console.log(even_or_odd(2))  // - 0 - Even
console.log(even_or_odd(0))  // - 0 - Even

