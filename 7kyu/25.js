//Categorize New Member

function openOrSenior (data){
    newArray = []    
        for(j = 0; j < data.length; j++){
            if(data[j][0] >=55 && data[j][1] > 7){
                newArray.push("Senior")
            }else{
                newArray.push("Open")
            }        
    } return newArray
}



console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))//['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]))//['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]))//['Senior', 'Open', 'Open', 'Open'])