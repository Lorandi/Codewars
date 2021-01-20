//Remove First and Last Character

function removeChar(str){
    // newStr=[];
    // str = str.split('')
    // for(i = 0; i < str.length; i++){
    //     if(i>0 && i <(str.length-1)){            
    //         newStr.push(str[i])
    //     }
    // }
    // return newStr.join('');
    
    return str.slice(1, -1);
};
   
console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("eu"));