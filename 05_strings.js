const name = "ayu_sh"

const repoCount = 50

// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`)

const gameName = new String('Ayush-hc-jain')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-2, 4)
console.log(anotherString)

const newStringOne = "  ayush  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitest.com/hitesh%20choudhary"


console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

console.log(gameName.split("-"))
