// Syntax 1 of decclaration
let pattern = "pw";
let regExOne = new RegExp(pattern);

let flag = "gi";
let regExTwo = new RegExp(pattern, flag);

// Syntax 2 of declaration

let regExThree = /pw/gi;   // Globally IncaseSensative
const strToCheck = "pw is growing at a rapid speed and recently they are working on pw skills to create skills based pw content";

let result = regExThree.test(strToCheck);

console.log(result);  // return answwer in boolean format

let result3 = strToCheck.replace(regExThree, "p-w");
console.log(result3);


const weburl = "%%%%%%%%%%%%%%";
const ans = weburl.replace("%", "-");
const ans2 = weburl.replace(weburl, "-");

console.log(ans);
console.log(ans2);
