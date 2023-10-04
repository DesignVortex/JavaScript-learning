const user = {
    userName: "Vishal",
    price: 999,

    welcomeMessage: function () {
        
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Ami";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Vishal";
//     console.log(this.username);
// }
// chai();

// const chai = () => {
//     let username = "Vishal";
//     console.log(this.username);
// }
// chai();


// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1 , num2) => num1 + num2;

// const addTwo = (num1 , num2) => (num1 + num2);

const addTwo = (num1 , num2) => ({name : "Ami"});


console.log(addTwo(2,3));




