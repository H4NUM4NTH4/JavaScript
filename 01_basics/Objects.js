//Objects literals
// const Jsuser = {
//     "full name" : "Hanumantha Mulimani",
//     name: "Hanumantha",
//     age: 21,
//     location: "Hubli",
//     email: "sanju@gmail.com",
//     isLoggedIn: false,
// }

// //Accessing the objects
// console.log(Jsuser.name)//not rcommended
// console.log(Jsuser["full name"])//recommended

//to change value of objects
// Jsuser.email = "hanumnatha@gmail.com"
// Object.freeze(Jsuser) //freezez the objects
// Jsuser.email = "hanumnatha@yahoo.com"
// console.log(Jsuser)

//functions on objects
// Jsuser.greeting = function() {
//     console.log("Hello Js User!")
// }

// Jsuser.greetingTwo = function() {
//     console.log(`Hello Js User! ${this.name}`)
// }

// console.log(Jsuser.greeting())
// console.log(Jsuser.greetingTwo())


//Singleton
// const tinderUser = new Object() //singleton object

const tinderUser = {}  //non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Joe"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "random@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hanumantha",
            lastname: "Mulimani"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname)

//concating two objects
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// // const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2} //using spread operator
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


//De-structuring

const course = {
    coursename: "js",
    price: "999",
    Instructor: "harry"
}

const {Instructor} = course
console.log(Instructor);

