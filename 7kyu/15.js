//List Filtering

const filter_list = array => {
    newArray = [];
    for (let i = 0; i < array.length; i++){        
        if (typeof array[i] === "number"){
            newArray.push(array[i]);
        }
    }return newArray
}

//const filter_list = array => array.filter(i => typeof i === 'number')

//x => x == 0 ||  typeof x === 'number'  ? x + 0 : "a"
console.log(filter_list([0,0,0,0,0,0,0]))  
console.log(filter_list([1,2,'a','b']))       //[1,2])
console.log(filter_list([1,'a','b',0,15]))        //[1,0,15])
console.log(filter_list([1,2,'aasf','1','123',123]))          //[1,2,123])