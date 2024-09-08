// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values)

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]
// const newNums = myNums.filter( (num) => num>4)
// console.log(newNums);

const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function(accumulator, currVal) {
    console.log(`accumulator: ${accumulator} and currVal: ${currVal}`);
    return accumulator + currVal
},0)
console.log(myTotal);

