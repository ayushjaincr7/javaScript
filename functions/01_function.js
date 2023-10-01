
// parameter
// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){
    return number1+number2
}
// // arguments



// const result = addTwoNumbers(3,5)

// console.log(result)

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,200))

const user = {
    username: "Ayush",
    price : 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}


// handleObject(user)
handleObject({
    username: "sam",
    price: 200
})


const myNewArray = [200, 400, 100,600]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray))