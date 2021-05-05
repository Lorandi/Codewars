//IQ Test


function iqTest(numbers) {
  var odd = []; 
  var even = [];
  numbers = numbers.split(" "); //separar os elentos por vírgula
    for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      even.push(numbers[i]) //criar array só de pares
    } else {
      odd.push(numbers[i]) //criar array só de ímpares
    }
  }
  if(odd.length < even.length) { //ver qual o array menor
    return numbers.indexOf(odd[0]) + 1; //caso array menor seja o odd, retornornar a posição do número impar no array numbers, mais um
  }else{
    return numbers.indexOf(even[0]) + 1; //caso array menor seja o even, retornornar a posição do número par no array numbers, mais um
  }
}

console.log(iqTest("2 4 7 8 10")); //3;
console.log(iqTest("1 2 2"));      // 1;
console.log(iqTest("1 1 2 1 1"));