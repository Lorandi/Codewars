//Decode the Morse code

// function decodeMorse (morseCode){
//    var traduzido=""
//    morseCode = morseCode.split(" ")
//    for(var i = 0; i <morseCode.length; i++){
//        traduzido += MORSE_CODE[morseCode[i]]

//    }
//    return traduzido
// }

decodeMorse = function( morseCode ) {
    return morseCode
             .split("   ") // get word code 3 spaces apart
             .map(word => word
                           .split(" ") // get character code 1 spaces apart
                           .map(character => MORSE_CODE[character]) // decode Morse code character
                           .join('')
              )
              .join(' ') // add spaces between words 
              .trim()
}
  

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))//'HEY JUDE')