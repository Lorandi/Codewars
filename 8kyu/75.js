//L1: Set Alarm

const setAlarm = (e,v) => e == true && v == false 

console.log(setAlarm(true, true))//"Should be false.");
console.log(setAlarm(false, true))//"Should be false.");
console.log(setAlarm(true, false))//"Should be true.");