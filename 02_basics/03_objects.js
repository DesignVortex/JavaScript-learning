
// Object literals

const jsUser = {
    name: "Vishal",
    "full name": "Vishal Gurjar",
    age: 37,
    location: "Vadodara",
    email: "vishal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Wed", "Sat"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

jsUser.email = "vishal@apple.com";

// Object.freeze(jsUser);
jsUser.email = "vishal@ymail.com"

jsUser.greetings = function(){
    console.log("Hello Vishal!");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello ${this["full name"]}`);
}

console.log(jsUser);
console.log(jsUser.greetingsTwo());