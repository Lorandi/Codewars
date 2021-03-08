//Equal Sides Of An Array

function findEvenIndex(arr)
{
    for (var i = 0; i < arr.length; i++){
        var arrLower = [];
        var arrHigher = [];
            for (var j = 0; j < arr.length; j++){
            if(j<i){
                arrLower.push(arr[j]);
            }else if(j>i){
                arrHigher.push(arr[j]);
            }
        }
        if(arrLower.reduce((a,b) => a + b , 0) ===  arrHigher.reduce((a,b) => a + b , 0)){
            return i;
        }
    }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))         //3
console.log(findEvenIndex([1,100,50,-51,1,1]))      //1
console.log(findEvenIndex([1,2,3,4,5,6]))           //-1
console.log(findEvenIndex([20,10,30,10,10,15,35]))  //3