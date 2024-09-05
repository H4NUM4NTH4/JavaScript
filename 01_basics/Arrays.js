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
// console.log("A", myArr)
// const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2)


const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array =  another_array.flat(Infinity)
console.log(real_another_array);