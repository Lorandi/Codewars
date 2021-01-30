//Square Every Digit

const squareDigits = n =>
Number(                     //volta ser número após fazer tudo que tá parenteses
('' + n)                    //transforma o número em string. poderia ser n.toString()
.split('')                  //separa num array cada caracter em uma string
.map((num) => num * num)    //multiplica cada caracter por ele mesmo
.join(""))                  //junta tudo
 

console.log(squareDigits(9119))//811181)

