const user = {
    username: "ayush",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "ayush"
//     console.log(this)
// }

// chai()


// const chai = () =>{
//     let username = "hitesh"
//     console.log(this)
// }
// chai()

// implicit return
// const addTwo = (num1, num2) =>  num1+num2
const addTwo = (num1, num2) =>  ({usrname: "Ayush"})

console.log(addTwo(3,4))



const myArray = [2,5,3,7,8]
