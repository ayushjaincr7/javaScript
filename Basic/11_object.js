const tinderUser = new Object()
tinderUser.id = "1234abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Ayush",
            lastName: "Jain"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: 'abc@gmail.com'
    },
    {
        id: 2,
        email: 'abg@gmail.com'
    }
]

// console.log(users[1].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ayush"
}
// destructor of object
const {courseInstructor: instructor} = course
console.log(instructor)





// +++++++++++++++++++++++++++++++++++  API  +++++++++++++++++++++++++++++++++++++

// json
// {
//     "name":"hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
