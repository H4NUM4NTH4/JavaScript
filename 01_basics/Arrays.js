const myArr = [0, 1, 2, 3, 4, 5]
const heros = ["Ironman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0])

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// console.log(myArr)


//Slice and Splice
console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2)
