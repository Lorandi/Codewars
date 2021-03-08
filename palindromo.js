const main = (params) => {
    var array = []
    var palindromes = 0;

    for (i = 0; i < 10000; i++) {
        var word = []
        x = 0;

        while(x < 3) {
            num();
        }

        for (j = 0; j < x; j++) {
            word.push(String.fromCharCode(Math.floor(Math.random() * 27 + 96)))
        }        
        array.push(word.join(''));
    }
    for(k = 0; k < array.length; k++) {
        reverse = array[k].split('').reverse().join('');
        if(reverse === array[k]){
            palindromes++
        }
    }
    return palindromes;
}

const num = () =>{
     x = Math.floor(Math.random() * 5 + 1);
     return x;
} 

console.log(main());