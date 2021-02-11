//Counting Duplicates

function duplicateCount(s) {
    if (s.length > 0) {
        s = s.toLowerCase().split("").sort();
        var a = [], b = [], prev, count = 0;

        for (var i = 0; i < s.length; i++) {
            if (s[i] !== prev) {
                a.push(s[i]);
                b.push(1);
            } else {
                b[b.length - 1]++;
            }
            prev = s[i];
        }
        for (j = 0; j < b.length; j++) {
            if (b[j] > 1) {
                count++;
            }
        } return count
    } return 0
}

console.log(duplicateCount(""))                 //0);
console.log(duplicateCount("abcde"))            //0);
console.log(duplicateCount("aabbcde"))          //2);
console.log(duplicateCount("aabBcde"))          //2,"should ignore case");
console.log(duplicateCount("Indivisibility"))   //1)
console.log(duplicateCount("Indivisibilities")) //2, "characters may not be adjacent")