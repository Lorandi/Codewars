var arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

function foo(arr) {
    var a = [], b = [], prev;
    
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    for(j = 0; j < b.length; j++){
        if(b[j] % 2 != 0){
            return a[j]            
        }
    }
}

var result = foo(arr);


