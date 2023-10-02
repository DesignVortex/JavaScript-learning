
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(12,13);
// function addTwoNumber(number1, number2){
//     let result = number1 + number2;
//     // console.log(result);
//     return result;
// }



function addTwoNumber(number1, number2){
    return number1 + number2;
}

const result1 = addTwoNumber(12,20);
// console.log(result1);

function loginUserMessage(userName){
    return `${userName} just logged in`;
}

const message = loginUserMessage("Vishal");
// console.log(message);

function calculateCartPrice(...price1){
    return price1;
}

// console.log(calculateCartPrice(200,300,600,654));

const user = {
    name: "Vishal",
    price: 199
}

function handleObject(anyUser){
    console.log(`Username is ${anyUser.name}, and price is ${anyUser.price}`);
}

// handleObject(user);

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getValue){
    return getValue[2];
}

console.log(returnSecondValue(myNewArray));