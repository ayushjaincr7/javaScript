const user = {
    username:"ayush",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details form database")
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}



// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(user)
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = ()=>{
        console.log(`Welcome ${this.username}`)
    }
    return this
    
}

const one = new User('ayus', 3, true)
console.log(one.constructor)