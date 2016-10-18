const reverse = function (array) {
    const oppositearray = [];
    const length = array.length;

    for (let a = length - 1; a >= 0; a--) {
        oppositearray.push(array[a]);
    }

    return oppositearray;
};