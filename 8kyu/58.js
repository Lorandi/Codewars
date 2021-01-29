//Find the first non-consecutive number

const firstNonConsecutive = array => {
    missing = array[0];
    for (i = 0; i <= array.length; i++) {
        if (missing == array[i]) {
            missing++;
        } else if (missing < array[i]) {
            return array[i];
        } else {
            return null;
        }
    }
}




console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))