//Two to One

const longest = (a, b) => ([...new Set((a + b).split("").sort())]).join('')

//const longest = (a, b) => ([...new Set((a + b))]).sort().join('')

console.log(longest("aretheyhere", "yestheyarehere"))   //"aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) //"abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"))   //"acefghilmnoprstuy")