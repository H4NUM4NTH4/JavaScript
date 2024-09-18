function outer(){
    let username = "sanju";
    function inner(){
        console.log("inner", username);
    }
    inner()
 }
 outer()
console.log("outer", username);
