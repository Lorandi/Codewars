//Beginner Series #1 School Paperwork

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        //return n > 0 && m > 0 ? n * m : 0
        return 0;
    } else {
        return console.log(n * m);
    }
}
paperwork(5, 5);
