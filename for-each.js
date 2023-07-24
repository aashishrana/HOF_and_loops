let arr = [2,3,4];

// arr.forEach(function(element, index, arr){
//     console.log(index, element, arr);
// })

// arr.forEach((ele, index, arr) => {
//     console.log(index, ele, arr);
// })

let arr1 = ["hello", "hii", "Dear"];

arr1.forEach((ele) => {
    console.log(ele.toUpperCase());
})

arr1.map((ele) => {
    console.log(ele);
})