class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return `${this._email}sanju`
    }
    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        return `${this._password}sanju`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const sanju = new User("sanju@gmail.com", "ibiqbvq")
console.log(sanju.password);
console.log(sanju.email);
