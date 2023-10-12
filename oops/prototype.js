 let myName = "Hitesh     "


 

 console.log(myName)

 let myHeros =["thor", "spiderman"]

 let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
 }

 Object.prototype.hitesh = () => console.log("hitesh is present in all object")

 Array.prototype.heyHitesh = () => console.log("Hitesh says hello")

heroPower.getSpiderPower()

heroPower.hitesh()

myHeros.hitesh()

// heroPower.heyHitesh()
myHeros.heyHitesh()


// inheritance

const User = {
    name:"chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makesAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ =  User

// modern Synatx
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length} `)
}

anotherUsername.trueLength()

"hitesh".trueLength()
