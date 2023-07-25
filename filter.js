const heores = ["Naagraj", "Adhiraj" , "Maniraj" , "abhi"];

heores.map((el) => {
    console.log(el.toUpperCase());
})

heores.forEach((index, el) => {
    console.log(el, index);
})

const heroesWithRaj = heores.filter((h) => {
    return h.endsWith('raj');
})

console.log(heroesWithRaj);
// arr.map((el) => {
//     console.log(el);
//     return el.endsWith("raj");
//     // console.log(el.endsWith("raj"));

// })

// console.log(arrWithraj);