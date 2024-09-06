// const user = {
//     username: "sanju",
//     price: 999,

//     welcomeMessage : function() {
//         console.log(`${this.username} Welcome to website`);
//         console.log(this)
//     } 
// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

//=============================//

//Arrow function syntax
const rand = () => {
    let username = "sanju"
    console.log(username);
}
rand()

const addTwo = (num1, num2) => ({username: "sanju"})
console.log(addTwo(3,5));
