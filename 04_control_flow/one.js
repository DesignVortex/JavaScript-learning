// if statement

// const temprature = 40;

// if(temprature < 50){
//     console.log("Temprature is less than 40");
// }else{
//     console.log("Temprature is greater than 40");   
// }

// const score = 200;

// if(score > 100){
//     const power = "Fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedINFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to login");

}

if(loggedINFromEmail || loggedInFromGoogle){
    console.log("Allow to login");

}

