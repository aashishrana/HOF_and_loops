const arr = [2,3,4,5];

const sumArray = arr => {
    let total = 0;

    arr.forEach(element => {
        total += element
    });

    return total;
}

console.log(sumArray(arr));