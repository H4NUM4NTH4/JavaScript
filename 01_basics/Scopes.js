function one(){
    const username = "sanju"

    function two(){
        const website = "google"
        console.log(username)
    }
    // console.log(website); //this will throw an error an its scope is limited to two only and two() and one() will  ot be executed
    two()
}
one() 