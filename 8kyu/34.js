//Total amount of points

function points(games) {
    total = 0;
    for (var i = 0; i < games.length; i++){
        if(games[i][0] > games[i][2] ){
            total+=3;
        }else if(games[i][0] == games[i][2]){
            total++;
        }
    } return total;    
  }

//const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)



    console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) //30
    console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])) //10;
    console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])) //0;
    console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])) //15;
    console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])) //12;
 