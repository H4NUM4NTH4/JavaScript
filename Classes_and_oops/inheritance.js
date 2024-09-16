class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const alpha = new Teacher("Beta", "beta@gmail.com", "123654")

alpha.addCourse()
const charlie = new user("charlie")

charlie.logMe()

console.log(alpha === Teacher);
console.log(alpha instanceof Teacher);
