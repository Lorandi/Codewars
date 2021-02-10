//Get the Middle Character

const getMiddle = string =>{
    l = string.length
    if(l < 3){
        return string
    }else if (l % 2 === 0) {
        return string = string.slice(l/2 -1, l/2+1)
    }else{
        return string = string.slice(l/2 -0.5, l/2+1)
    }
} 

//string.length % 2 === 0 ? 
console.log(getMiddle("testing"))  //"t");
console.log(getMiddle("middle"))   //"dd");
console.log(getMiddle("A"))        //"A");