//Dubstep
//ta errado ainda

function songDecoder(song){
    
    newSong = song.replace(/WUB/g,"%")
    finalSong = "";
    answer = "";

    for(var i = 0; i < newSong.length; i++){
        if(newSong[i] == "%"){
            continue;
        }else if((newSong[i] != "%" && newSong[i - 1] == "%")){
            finalSong += "%"  
            finalSong +=newSong[i]
        }else{
            finalSong +=newSong[i]
        }
    }
    //for(var i = 0; i < finalSong.length; i++){



    console.log (`song: ${song}`)
    console.log (`newSong: ${newSong}`)
    console.log (`finalSong: ${finalSong}`)
    return 0;
  }

  console.log(songDecoder("AWUBBWUBC"))//"A B C","WUB should be replaced by 1 space");
  console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))//"A B C","multiples WUB should be replaced by only 1 space");
  console.log(songDecoder("WUBAWUBBWUBCWUB"))//"A B C","heading or trailing spaces should be removed");
  console.log(songDecoder("WUBjkdWUBWUBwbiraqkfWUBWUByeWUBWUBWUBWVWUBWUB"))//'JKD WBIRAQKF YE WV'