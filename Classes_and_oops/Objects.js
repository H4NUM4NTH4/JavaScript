function multiplyBy5(num){
    return num*5;
}

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const me = new createUser("me", 25)
const you = new createUser("you", 25)

me.printMe()