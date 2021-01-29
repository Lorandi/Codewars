//Convert a string to an array


const stringToArray = string => Array.from(string).join("").split(" ")

//const stringToArray = string => string.split(" ")

console.log(stringToArray("Robin Singh"))//["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"))//["I", "love", "arrays", "they", "are", "my", "favorite"]);