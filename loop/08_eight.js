// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((acc, currValue)=> acc + currValue, 0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'js course',
        price: 1200
    },
    {
        itemName: 'dataScience course',
        price: 12000
    },
    {
        itemName: 'dev mobile course',
        price: 1211
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)
