//  array

const myArray = [0,1,2,3,4,5]
const myHeors = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)
console.log(myArray[0])


// Array methods

// myArray.push(6)
// myArray.push(7) => last insert to last of element
// myArray.pop()   => last element delete
// myArray.unshift(9) => insert at begining
// myArray.shift()  => delete from starting 

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(9))

// const newArr = myArray.join()
// console.log(newArr)
// console.log(myArray)


let cars = ['audi', 'bmw', 'xuv', 'maruti'];
console.log(cars.indexOf('audi'))  // to find index

console.log(cars.includes('toyota')) // to find present or not

let cars1 = ['red', 'yellow', 'blue'];
console.log(cars.concat(cars1)) // not change orginial arrays and order is maintain

// reverse
console.log(cars.reverse()) // change orginial arrays





// slice, splice(remove / replaces / add elements in place)
// splice(start, deleteCount, item0....itemN) // not change orginial arrays

console.log("A ", myArray)
const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B ", myArray)

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("C ", myArray)


