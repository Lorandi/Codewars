//String ends with?

//const solution = (a,b) =>a.match(b) ? true : false

const solution = (a,b) => b === a.substr(a.length - b.length);

// function solution(str, ending){
//     return str.endsWith(ending);
//   }

console.log(solution('abcde', 'cde'))//true
console.log(solution('abcde', 'abc'))//false
console.log(solution('abc', 'c'))//true
console.log(solution('abc', 'd'))//false