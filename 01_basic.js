// Variable 
const accountId = 144523
// const never change 


let accountEmail =  "ayush@gmail.com"

var accountPassword = "122344"
/* 
    Prefer not to use var
    because of issue in block scope and functional scope
*/
let accountState;

accountCity = "Jaipur"

// accountId = 2  // not allowed 
accountEmail = "hc@hc.com"
accountPassword = "1232323"
accountCity = "Bengaluru"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);