//Persistent Bugger
var count = 0;
function persistence (num){
    count = 0;
    teste(num)
    return count;    
}

function teste (num) {    
    num = (""+ num).split("");
    temp = 1;
    if(num.length > 1){
        count++;
        for (i = 0; i < num.length; i++){
        temp *= num[i];
        //console.log("count: " + count + "  temp: " + temp);         
    }
    }if (temp < 10){
        return count;
    } else{        
        num = temp;     
        return teste(num);                
    }
}
 console.log(persistence(39))    //3
 console.log(persistence(4))     //0
 console.log(persistence(25))    //2
 console.log(persistence(999))   //4