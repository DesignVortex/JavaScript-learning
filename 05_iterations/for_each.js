const coding = ["node","js","python","ruby","Swift","Kotlin"];

coding.forEach( function(item) {
    // console.log(item);
} );

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe);

const myCoding = [
    {
        languageName: "JavaScript",
        fileExtention: "js"
    },
    {
        languageName: "Java",
        fileExtention: "java"
    },
    {
        languageName: "Python",
        fileExtention: "py"
    }
];

myCoding.forEach( (item) => {
    console.log(item.fileExtention);
} )