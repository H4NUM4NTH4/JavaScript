function loginUserMessage(username) {
    if(!username){ //if username is not defined this block will execute
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Sanju"))

//=============================================//

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,500,400,300))

//=============================================//

const user = {
    username : "Sanju",
    price: 199
}

function handleObjects(anyobjects){
    console.log(`Username is ${anyobjects.username} and price is ${anyobjects.price}`)
}
handleObjects(user)

//==============================================//