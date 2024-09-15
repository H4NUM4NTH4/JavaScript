function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password  = password
}

const random = new createUser("user", "user@gmail.com", "123654")
    console.log(random);
