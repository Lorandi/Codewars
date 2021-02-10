//Complementary DNA

const DNAStrand = dna =>  dna.replace(/T/g, '1').replace(/A/g, '2').replace(/G/g, '3').replace(/C/g, '4').replace(/1/g, 'A').replace(/2/g, 'T').replace(/3/g, 'C').replace(/4/g, 'G')

// function DNAStrand(dna){
//     var complements = {
//       A: 'T',
//       T: 'A',
//       C: 'G',
//       G: 'C'
//     };
//     return dna.split('').map((char)=> complements[char]).join('');
//   }




console.log(DNAStrand("AAAA"))      //"TTTT","String AAAA is");
console.log(DNAStrand("ATTGC"))     //"TAACG","String ATTGC is");
console.log(DNAStrand("GTAT"))      //"CATA","String GTAT is");