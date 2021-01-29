
//DNA to RNA Conversion

const DNAtoRNA = dna => dna.split("").map(x => x == 'T' ? 'U' : x).join("")

//const DNAtoRNA = dna => dna.split("").map(x => x.replace("T","U")).join("")

//const DNAtoRNA = dna => dna.replace(/T/g, 'U')

//const DNAtoRNA = dna => dna.split("T").join("U");

console.log(DNAtoRNA("TTTT"))       //"UUUU")
console.log(DNAtoRNA("GCAT"))       //"GCAU")
console.log(DNAtoRNA("GACCGCCGCC")) //"GACCGCCGCC")



