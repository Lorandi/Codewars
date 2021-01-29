//Are You Playing Banjo?


//const areYouPlayingBanjo = name => name[0] ==="R" || name[0] ==="r" ? `${name} plays banjo` : `${name} does not play banjo`

const areYouPlayingBanjo = name => name[0].toLowerCase() ==="r" ? `${name} plays banjo` : `${name} does not play banjo`

console.log(areYouPlayingBanjo("Martin"))// "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke")) //"Rikke plays banjo");
