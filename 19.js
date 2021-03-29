//Unique In Order

var uniqueInOrder=function(iterable){
    var newArray = [];
    for(i = 0; i < iterable.length; i++){
        if(iterable[i] != iterable[i - 1]){
            newArray.push(iterable[i])
        }
    }
    return newArray
  }

  console.log(uniqueInOrder('AAAABBBCCDAABBB'));
  console.log(uniqueInOrder('ABBCcAD')) 
  console.log(uniqueInOrder([1,2,2,3,3]))