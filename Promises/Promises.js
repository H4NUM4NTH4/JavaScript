//Promise creation
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asyns task is complete');
        resolve()
    }, 1000)
})

//Promise consumption
promiseOne.then(function(){
    console.log("Promise consumed")
})

//Another Method
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then.Promise(function(){
    console.log("Async 2 consumed");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asyns task is complete');
        resolve({username: "Sanju", email: "sanju@gmail.com"})
    }, 1000)
})

//Promise consumption
promiseThree.then(function(user){
    console.log(user)
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Sanju", email: "sanju@gmail.com"})
        } else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

//Promise consumption
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"));



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript", password: "123654"})
        } else{
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

consumePromiseFive()