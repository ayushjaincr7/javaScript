//  singleton
// Object.create

// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Ayush",
    "full name": "Ayush Jain",
    [mySym] : "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}



// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


JsUser.email = "ayush@chatgpt.com"
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "ayush@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

