// for loop

for (let index = 0; index < 5; index++) {
    const element = index;
    // console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    
    // console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {

        // console.log(`Inner loop: ${j}`);
        
        
    }
    
}


const myArray = ["Flash", "Batman", "Superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}

// for (let index = 0; index <= 10; index++) {
    
//     if (index == 5) {
//         console.log("Detected 5");
//         break;
//     }
//     console.log(index);
    
// }
for (let index = 0; index <= 10; index++) {
    
    if (index == 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(index);
    
}

