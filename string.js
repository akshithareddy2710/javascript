const dept = "phe"
const repoCount = 40

console.log(`this my dept ${dept} and my repo count is ${repoCount}`);

const gameName = new String('akshitha');


console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(1,3)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);

const newStringOne = "     akshitha "
console.log(newStringOne.trim());

const url = "https://akshitha.com/akshitha%20reddy"
console.log(url.replace('%20' , '-'))

console.log(url.includes('aksith'))