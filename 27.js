//Friend or Foe?

const friend = (friends) => {
    newArray = [];
    for (let i = 0; i < friends.length; i++){
        if (friends[i].length == 4){
            newArray.push(friends[i])
        }
    }return newArray
}

//const friend = friends => friends.filter(friend => friend.length == 4);

console.log(friend(["Ryan", "Kieran", "Mark"]))     //["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))      //["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))       //["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]))      //["Love", "Your", "Face"]);