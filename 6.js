//Reversed Strings

function solution(str){
    // reversedStr=[];    
    // for(var i=0;i<str.length;i++){
    //         reversedStr.push(str[str.length - i -1]);             
    // }
    // return reversedStr.join('');
    
    return str.split('').reverse().join('');  
}

console.log(solution("World"))
