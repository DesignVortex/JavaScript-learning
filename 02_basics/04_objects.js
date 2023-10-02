// singleton method to declare object

const tinderUser = new Object();

tinderUser.id = "vishal2406";
tinderUser.name = "Vishal";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "vishal@google.com",
    fullName: {
        userFullName:{
            firstName: "Vishal",
            lastName: "Gurjar"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2};

// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("name"));


// Object destructring

const course = {
    courseName:  "JS in hindi",
    courseFee: "999",
    courseTeacher: "Hitesh" 
}

const {courseTeacher} = course;
const {courseTeacher: teacher} = course;


console.log(courseTeacher);
console.log(teacher);







