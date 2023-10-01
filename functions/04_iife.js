// Immediately invoked function expressions

(function chai() {
    console.log("db connected");
})();

// (()=>{
//     console.log('db connected')
// })()
((name)=>{
    console.log(`db connected ${name}`)
})('Ayush')

