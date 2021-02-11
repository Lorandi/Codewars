//Find The Parity Outlier

function findOutlier (integers){
    var odd = [], even = []

    for (var i = 0; i < integers.length; i++){
        if(integers[i] % 2 == 0){
            even.push(integers[i]); 
        }else{
            odd.push(integers[i])
        }
    }
    if(odd.length<even.length){
        return odd[0]
    }else{
        return even[0]
    }    
}

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }

console.log(findOutlier([0, 1, 2]))     //1)
console.log(findOutlier([1, 2, 3]))     //2)
console.log(findOutlier([2,6,8,10,3]))  //3)
console.log(findOutlier([0,0,3,0,0]))   //3)
console.log(findOutlier([1,1,0,1,1]))   //0)