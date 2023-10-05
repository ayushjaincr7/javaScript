const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( (code, index, arr) => {
//     console.log(code, index, arr)
// });


const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },
    {
        language: "java",
        languageFileName: "java"
    },
    {
        language: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    
    console.log(item.language)
})