//Stop gninnipS My sdroW!

function spinWords (string){    
      var final =[]
      string = string.split(" ")
      if(string.length == 1 && string[0].length > 4){
          return  string[0].split("").reverse().join("")
      }else if (string.length > 1){
          for (var i = 0; i < string.length; i++){
              if (string[i].length > 4){
                 final.push(string[i].split("").reverse().join(""))
              }else{
                final.push(string[i])
              }
          } return final.join(" ")
      }
      return string.join(" ")
  }

//   function spinWords(str){
//     return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
//   }



console.log(spinWords("Welcome"))   //"emocleW");
console.log(spinWords("Hey fellow warriors"))   //"Hey wollef sroirraw");
console.log(spinWords("This is a test"))    //"This is a test");
console.log(spinWords("This is another test"))  //"This is rehtona test");
console.log(spinWords("You are almost to the last test"))   //"You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"))  //"Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"))    //"ylsuoireS this is the last one");