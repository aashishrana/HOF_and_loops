const gameScore = [200, 300, 310 , 250, 150]

// check if all values are number
// gameScore.map((el)=> {
//     if(el === Number) {
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// })
// // console.log(typeof(gameScore));

console.log(typeof gameScore[1]);

const gameScoreCheck = gameScore.every((v) => typeof v === "number");

console.log("check : ", gameScoreCheck);