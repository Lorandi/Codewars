let a, b, rest;

[a, b, c, ...rest] = [10, 20, 30, 40, 50, "cachorro"];

console.log(rest);
console.log(a);
console.log(b);
// expected output: Array [30,40,50]