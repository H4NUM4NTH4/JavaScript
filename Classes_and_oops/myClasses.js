// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ikki = new User("Sanju", "sanju@gmail.com", "123")
// console.log(ikki.encryptPassword());
// console.log(ikki.changeUsername());
    
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const lol = new User("Sanju", "sanju@gmail.com", "456")
console.log(lol.encryptPassword());
console.log(lol.changeUsername());