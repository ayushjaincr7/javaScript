const promiseOne = new Promise((resolve, reject)=>{
    // do an async task

    // DB calls, cryptography, netwrok

    setTimeout(()=>{
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log('Promise consumed')
})

new Promise((resolve, reject )=>{
    setTimeout(()=>{
        console.log("Async task 2")
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved")
})


const promiseThree = new Promise( (resovle, reject) => {
    setTimeout(()=>{
        resovle({username: "Ayush", email:"ja7ayush@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username: "ayush", password: "123"})
        }
        else {
            reject('Error: something went wrong')
        }
    }, 1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
 console.log(error)
}).finally(()=> console.log("The promise is resolve or rejected"))



const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({username: "javaScript", password: "123"})
        }
        else {
            reject('Error: js went wrong')
        }
    }, 1000)
})

async function consumedPromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    } catch(error){
        console.log(error)
    }
}

consumedPromiseFive()



// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch(error){
//         console.log("E: ", error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error) => console.log(error))