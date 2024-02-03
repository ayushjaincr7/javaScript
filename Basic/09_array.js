const marvel_heros = ['thor', 'Ironman', 'spiderman']
const dc_heros = ['superman', 'flash','batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({
    name: "Hitesh"
})) // interesting 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))

let numbets = [100, 42, 67, 89, 99];

// sorting first convert to string then sort



// Array reference
console.log([1]==[1])


// array const 
const arr = [1,2,3]; // we can not create complete new array
arr.push(4);
console.log(arr)

