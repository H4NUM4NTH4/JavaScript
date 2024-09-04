const name = "sanju"
const repoCount = 10

//console.log(name + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Sanju")
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

const anotherString = gameName.slice(-8, 1)
console.log(anotherString);

const newStringOne = "         sanju          "
console.log(newStringOne.trim())

const url = "https://sanju.com/sanju@2mulimani"
console.log(url.replace('@2', '_'))