const myNumbers = [1, 2, 3, 4, 5];

// const myTotal = myNumbers.reduce( function(acc, currval){
//     return acc + currval;
// },0);

const myTotal = myNumbers.reduce( (acc, currval) => (acc + currval), 0);

// console.log(myTotal);

const shoppingCart = [
    {
        courseName: "JS Course",
        price: 999
    },
    {
        courseName: "Python Course",
        price: 1999
    },
    {
        courseName: "Mobile Dev Course",
        price: 4999
    },
    {
        courseName: "Data Science Course",
        price: 2999
    },
];

const myShoppingTotal = shoppingCart.reduce((acc, currvalue) => acc + currvalue.price , 0);

console.log(myShoppingTotal);