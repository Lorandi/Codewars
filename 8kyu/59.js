// const expressionMatter = (a,b,c) => {
//     array = []

//     result1 = a * (b + c)
//     array.push(result1);

//     result2 = (a + b) * c    
//     array.push(result2);  

//     result3 = a * b * c
//     array.push(result3);   
    
//     result4 = a + b + c
//     array.push(result4); 

//     result5 = a + b * c
//     array.push(result5);

//     result6 = a * b + c
//     array.push(result6);

//     return Math.max(...array)
// }

const expressionMatter = (a, b, c) => Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));


  console.log(expressionMatter(2, 1, 2)) //6);
  console.log(expressionMatter(2, 1, 1)) //4);
  console.log(expressionMatter(1, 1, 1)) //3);
  console.log(expressionMatter(1, 2, 3)) //9);
  console.log(expressionMatter(1, 3, 1)) //5);
  console.log(expressionMatter(2, 2, 2)) //8);