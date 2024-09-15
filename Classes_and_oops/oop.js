 //Object literal 
 
 const user = {
    username: "sanju",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);
    }
 }

 console.log(user.username);
 console.log(user.getUserDetails());

 //Constructor function
 function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
 }

 const userOne = new User("Sanju", 12, true)
 const userTwo = new User("anyno", 11, false)
 console.log(userOne);
 console.log(userTwo);
 

